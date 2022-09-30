<?php
// src/Controller/DefaultController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Service\StatusMessageGenerator;
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

  
}
