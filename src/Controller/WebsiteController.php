<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\FtpService;
use App\Entity\SiteWeb;
use App\Entity\User;
use App\Entity\ContactInfo;
use App\Entity\ServerInfo;

class WebsiteController extends AbstractController
{


  #[Route('/{nom_site}/send', name: 'ftp_send', methods: ['GET'])]
  public function sendFtp(FtpService $ftpService, Request $request, string $projectDir): Response
  {
    $routeParams = $request->attributes->get('_route_params');

    //$fileUrl = $routeParams['nom_site'] . '.html';

    $user = $this->getUser();

    $ftp_host = $user->getServerInfo()->getFtpHost();
    $ftp_user = $user->getServerInfo()->getFtpUser();
    $ftp_pass = $user->getServerInfo()->getFtpPass();

    $file = $ftpService->sendFile( $ftp_host, $ftp_user, $ftp_pass,$projectDir);

    //read the content of the file
    return $this->render('ftp/sent.html.twig', [
      'file' => $file,
      'user' => $user,
    ]);
  }

  #[Route('/{nom_site}/save', name: 'ftp_save', methods: ['GET'])]
  public function ftp(FtpService $ftpService, SiteWeb $siteWeb, Request $request): Response
  {

    $routeParams = $request->attributes->get('_route_params');
    $nomFichier = $routeParams['nom_site'];

    $contactInfo = $siteWeb->getProprietaire()->getContactInfo();


    $renderedFile = $this->render('site/onepage.html.twig', [
      'site' => $siteWeb,
      'contactinfo' => $contactInfo,
    ]);
    $ftpService->saveFile($renderedFile->getContent(), $nomFichier);

    //redirecttoroute builder_show
    return $this->redirectToRoute('builder_show', [
      'site' => $siteWeb,
      'contactinfo' => $contactInfo,
      'nom_site' => $siteWeb->getNomSite(),
      'siteSaved' => true,
    ]);
  }
}
