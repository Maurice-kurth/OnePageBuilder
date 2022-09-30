<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\FtpService;
use App\Entity\SiteWeb;
use App\Entity\ServerInfo;

class WebsiteController extends AbstractController
{


  #[Route('/{nom_site}/send', name: 'ftp_send', methods: ['GET'])]
  public function sendFtp(FtpService $ftpService, Request $request): Response
  {
    $routeParams = $request->attributes->get('_route_params');

    $fileUrl = $routeParams['nom_site'] . '.html';

    $user = $this->getUser();

    $ftp_host = $user->getServerInfo()->getFtpHost();
    $ftp_user = $user->getServerInfo()->getFtpUser();
    $ftp_pass = $user->getServerInfo()->getFtpPass();

    $file = $ftpService->sendFile($fileUrl, $ftp_host, $ftp_user, $ftp_pass);

    //read the content of the file
    return $this->render('ftp/sent.html.twig', [
      'file' => $file,
    ]);
  }

  #[Route('/{nom_site}/save', name: 'ftp_save', methods: ['GET'])]
  public function ftp(FtpService $ftpService, SiteWeb $siteWeb, Request $request): Response
  {

    //Ftp info
    /*$userServerInfo = $this->getUser()->getServerInfo();
      $ftp_host = $userServerInfo->getFtpHost();
      $ftp_user = $userServerInfo->getFtpUser();
      $ftp_pass = $userServerInfo->getFtpPass();
*/
    $routeParams = $request->attributes->get('_route_params');
    $nomFichier = $routeParams['nom_site'];

    $renderedFile = $this->render('builder/show.html.twig', [
      'site' => $siteWeb,
    ]);
    $ftpService->saveFile($renderedFile->getContent(), $nomFichier);

    return $this->render('ftp/saved.html.twig', [
      'site' => $siteWeb,
    ]);
  }
}
