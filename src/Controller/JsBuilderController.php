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

class JsBuilderController extends AbstractController
{
    #[Route('/builderjs', name: 'builder_form_js')]
    public function renderJsForm()
    {

        $form = $this->createForm(SiteWebType::class);

        $view = $this->renderView('/js_builder/jsbuilder.html.twig', [
            'form' => $form->createView(),
            'phphello' => 'Hello from PHP',
        ]);

        /*return $this->json([
            'form' => $view,
            'title' => 'Create a new Site Web',
        ]);*/
        return new Response($view);
    }

    public function storeForm(): Respone{

    }

    #[Route('/api/jsform', name: 'api_jsform')]
    public function testApi(Request $request, ManagerRegistry $doctrine)
    {

        $data = json_decode($request->getContent(), true);


        //TODO :  make a service to handle this



        //Attribute data
        $siteName = $data['nomSite'];
        $siteDescription = $data['presentationSite'];
        $siteThemeColors = $data['themeColors'];
        //Create a new SiteWeb object and initialize it with data from the form
        $siteWeb = new SiteWeb();
        $siteWeb->setCreatedAt(new DateTimeImmutable('now'));

        $siteWeb->setNomSite($siteName);
        $siteWeb->setDescriptionSite($siteDescription);

        //Placeholder
        $siteWeb->setThemeColors($siteThemeColors);
        //make current user the proprietaire
        $siteWeb->setProprietaire($this->getUser());
        //Set products of siteweb as an array of arrays
        $siteWeb->setProducts([
            ['name' => 'Product 1', 'price' => 19.99, 'weight' => 1.5],
            ['name' => 'Product 2', 'price' => 9.99, 'weight' => 0.5],
            ['name' => 'Product 3', 'price' => 29.99, 'weight' => 2.5],
        ]);



        //Persister dans la bdd
        $entityManager = $doctrine->getManager();
        $entityManager->persist($siteWeb);
        $entityManager->flush();

        return $this->redirectToRoute('builder_success', ['nom_site' => $siteWeb->getNomSite()]);

    }
    

}
