<?php
// src/Controller/DefaultController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Service\StatusMessageGenerator;
use App\Service\FtpService;

use App\Entity\SiteWeb;

class DefaultController extends AbstractController
{
  /**
   * @Route("/", name="builder")
   */
  public function builder(StatusMessageGenerator $statusMessageGenerator): Response
  {
    $message = $statusMessageGenerator->getStatusMessage();
    return $this->render('index.html.twig', [
      'message' => $message,
    ]);
  }

  #[Route('/{nom_site}/send', name: 'ftp_send', methods: ['GET'])]
  public function sendFtp(FtpService $ftpService, Request $request): Response
  {
    $routeParams = $request->attributes->get('_route_params');

    $fileUrl = $routeParams['nom_site'] . '.html';
    $file = $ftpService->sendFile($fileUrl);

    //read the content of the file
    return $this->render('ftp/sent.html.twig', [
      'file' => $file,
    ]);
  }

  #[Route('/{nom_site}/save', name: 'ftp_save', methods: ['GET'])]
  public function ftp(FtpService $ftpService, SiteWeb $siteWeb, Request $request): Response
  {

    $routeParams = $request->attributes->get('_route_params');
    $nomFichier = $routeParams['nom_site'];

    $renderedFile = $this->render('builder/show.html.twig', [
      'site' => $siteWeb,
    ]);
    $ftpService->saveFile($renderedFile->getContent(), $nomFichier);

    return $this->render('ftp/saved.html.twig');
  }
}
