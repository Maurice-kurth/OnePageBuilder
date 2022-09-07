<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\SiteWeb;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;



class BuilderController extends AbstractController
{



   /**
    * @Route("/", name="builder")
    */
    public function builder(): Response
    {
      return $this->render('builder/builder.html.twig');
    }
    /**
    * @Route("/builderform/", name="builder_form")
    */
    public function buildForm(Request $request, ManagerRegistry $doctrine): Response
    {
        //Create a new SiteWeb object and initialize it with some data for this example
        $siteWeb = new SiteWeb();
        $siteWeb->setCreatedAt(new \DateTimeImmutable('now'));
        $siteWeb->setThemeColors(['#25316D', '#5F6F94', '#97D2EC']);
        $siteWeb->setProprietaire('LCDZ défaut');
        //Set products of siteweb as an array of arrays
        $siteWeb->setProducts([
            ['name' => 'Product 1', 'price' => 19.99, 'weight'=> 1.5],
            ['name' => 'Product 2', 'price' => 9.99, 'weight'=> 0.5],
            ['name' => 'Product 3', 'price' => 29.99, 'weight'=> 2.5],
        ]);  
        $siteWebForm = $this->createFormBuilder($siteWeb)
            ->add('nom_site', TextType::class)
            ->add('description_site', TextAreaType::class)
            ->add('save', SubmitType::class, ['label' => 'Créer mon Site Web'])
        
            ->getForm();


        //Handle the request
        $siteWebForm->handleRequest($request);
        if ($siteWebForm->isSubmitted() && $siteWebForm->isValid()) {
            // $form->getData() holds the submitted values
            $siteWeb = $siteWebForm->getData();

            // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!
            $entityManager = $doctrine->getManager();
            $entityManager->persist($siteWeb);
            $entityManager->flush();

            return $this->redirectToRoute('builder_success', ['nom_site' => $siteWeb->getNomSite()]);
        }

      


        return $this->renderForm('builder/buildform.html.twig', [
        'siteWebForm' => $siteWebForm,
        ]);



    }


    #[Route('/builder/site/{nom_site}', name: 'builder_show', methods: ['GET'])]
    public function showSite(SiteWeb $siteWeb): Response
    {
      
        return $this->render('builder/show.html.twig', [
            'site' => $siteWeb,
        ]);
    }


    #[Route('/builder/success/{nom_site}', name: 'builder_success', methods: ['GET'])]
    public function builderSuccess(SiteWeb $siteWeb): Response
    {
      return $this->render('builder/builderSuccess.html.twig', [
        'url' => $siteWeb->getNomSite(),
      ]);
    }
 
}