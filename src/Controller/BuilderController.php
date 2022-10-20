<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\SiteWeb;
use App\Form\Type\ProductType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

#[IsGranted('ROLE_USER')]
class BuilderController extends AbstractController
{
  
   

    #[Route('/builder/site/{nom_site}', name: 'builder_show', methods: ['GET'] )]
    public function showSite(SiteWeb $siteWeb, Request $request): Response
    {

        //get url parameter siteSaved
        $siteSaved = $request->query->get('siteSaved');
        $contactInfo = $request->query->get('contactInfo');
        return $this->render('site/preview.html.twig', [
            'site' => $siteWeb,
            'contactinfo' => $siteWeb->getProprietaire()->getContactInfo(),
            'siteSaved' => $siteSaved,
            'sitePublished' => false,
            'isPreview' => true,
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
