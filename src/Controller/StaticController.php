<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StaticController extends AbstractController
{
    #[Route('/a-propos', name: 'a_propos')]
    public function apropos(): Response
    {
        return $this->render('static/about.html.twig', [
        ]);
    }
    #[Route('/mentions-legales', name: 'mentions_legales')]
    public function mentionsLegales(): Response
    {
        return $this->render('static/mentions.html.twig', [
        ]);
    }
}
