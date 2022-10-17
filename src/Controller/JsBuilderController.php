<?php

namespace App\Controller;

use App\Entity\SiteWeb;
use App\Service\OnePageCreatorService;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[IsGranted('ROLE_USER')]
class JsBuilderController extends AbstractController
{

    #[Route('/builderjs', name:'builder_form_js')]
function renderJsForm()
    {
    $view = $this->renderView('/js_builder/jsbuilder.html.twig', [
      
    ]);
    return new Response($view);
}

#[Route('/api/jsform', name:'api_jsform', methods:['POST'])]

function sendForm(Request $request, ManagerRegistry $doctrine, OnePageCreatorService $onePageCreatorService)
    {
    //get the formData from the request
    $data = $request->request->all();

    //Call the OnePageCreatorService to create the website
    $onePageCreatorService->checkUpdateOrCreate();
    //$onePageCreatorService->getFormData($data,$request);

    //persist the site in the database
    $entityManager = $doctrine->getManager();
    $entityManager->persist($onePageCreatorService->getFormData($data, $request));
    $entityManager->flush();

    return $this->render('/js_builder/show_post_data.html.twig', [
        'data' => $data,
    ]);

}

//Récupérer les informations du site web en requete GET par Vue.js
//Remplacer les valeurs du formulaire par les valeurs du site web en bdd
#[Route('/api/siteinfo', name:'api_siteinfo')]
function getSiteInfo(Request $request, ManagerRegistry $doctrine)
    {
    //get current user
    if ($this->getUser()->getSiteWeb()) {
        $siteName = $this->getUser()->getSiteweb()->getNomSite();
    } else {
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
