<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class BuilderController extends AbstractController
{
   /**
    * @Route("/builder/", name="builder")
    */
    public function builder(): Response
    {
      return $this->render('builder/builder.html.twig');
    }
    /**
    * @Route("/builderform/", name="builder_form")
    */
    public function buildForm(): Response
    {
      return $this->render('builder/buildform.html.twig');
    }
}