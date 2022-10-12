<?php

namespace App\Controller;

use App\Entity\User;
use DateTimeImmutable;
use App\Entity\SiteWeb;
use App\Form\SiteWebType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\File\UploadedFile;

#[IsGranted('ROLE_USER')]
class JsBuilderController extends AbstractController
{
    #[Route('/builderjs', name: 'builder_form_js')]
    public function renderJsForm()
    {

       // $form = $this->createForm(SiteWebType::class);

        $view = $this->renderView('/js_builder/jsbuilder.html.twig', [
           // 'form' => $form->createView(),
            'phphello' => 'Hello from PHP',
        ]);

        return new Response($view);
    }

  
 

    #[Route('/api/jsform', name: 'api_jsform', methods: ['POST'])]

    public function sendForm(Request $request, ManagerRegistry $doctrine)
    {
        //get the formData from the request
        $data = $request->request->all();
 
    
        //TODO :  make a service to handle this

        //Attribute data
        $siteName = $data['nom_site'];
        $siteDescription = $data['presentationSite'];
        $siteThemeColors = json_decode($data['themeColors'],true ) ?? ['#000000','#ffffff','#333333'];
        $siteProducts =  json_decode($data['products'],true ) ?? [['name' => 'Product manquant', 'price' => 0, 'weight' => 1.6]];
        
        //Fichier de destination de l'image
        $destination = $this->getParameter('kernel.project_dir').'/public/uploads';

        //Récupération du fichier
        $siteLogo = $request->files->get('siteLogo');

        //save $siteLogo to $destination folder
        $siteLogo->move($destination, $siteLogo->getClientOriginalName());

        //Check if SiteWeb for this user already exists, if yes, replace the values, if not, create it.
        $user = $this->getUser();
        $siteWeb = $user->getSiteWeb();

        if($siteWeb == null ){
            $siteWeb = new SiteWeb();
            $siteWeb->setCreatedAt(new DateTimeImmutable('now'));
        }

        //Create a new SiteWeb object and initialize it with data from the form
        //$siteWeb->setImageFile($siteLogo);
  
        
        $siteWeb->setNomSite($siteName);
        $siteWeb->setDescriptionSite($siteDescription);

       
        //Placeholder
        $siteWeb->setThemeColors($siteThemeColors);

        //make current user the proprietaire
        $siteWeb->setProprietaire($this->getUser());

        //Set products of siteweb as an array of arrays
        $siteWeb->setProducts($siteProducts);


        //Persister dans la bdd
        $entityManager = $doctrine->getManager();
        $entityManager->persist($siteWeb);
        $entityManager->flush();

        return $this->render('/js_builder/show_post_data.html.twig', [
            'data' => $data,
        ]);

    
    }


  
    //Récupérer les informations du site web en requete GET par Vue.js
    //Remplacer les valeurs du formulaire par les valeurs du site web en bdd
    //TODO :  make a service to handle this
    #[Route('/api/siteinfo', name: 'api_siteinfo')]
    public function getSiteInfo(Request $request, ManagerRegistry $doctrine)
    {
        //get current user
        if($this->getUser()->getSiteWeb()){
            $siteName = $this->getUser()->getSiteweb()->getNomSite();
        } else{
            return $this->json([
                'code' => 404,
                'error' => 'No site found',
            ]);
        }
        
        $siteWeb = $doctrine->getRepository(SiteWeb::class)->findOneBy(['nom_site' => $siteName]);
        $siteWebArray = [
            'nomSite' => $siteWeb->getNomSite(),
            'descriptionSite' => $siteWeb->getDescriptionSite(),
            'themeColors' => $siteWeb->getThemeColors(),
            'products' => $siteWeb->getProducts(),
        ];
        return $this->json($siteWebArray);
    }
    

}
