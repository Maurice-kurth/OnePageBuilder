<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StaticController extends AbstractController
{
    #[Route('/a-propos', name: 'a_propos')]
    public function index(): Response
    {
        return $this->render('static/about.html.twig', [
        ]);
    }
}
