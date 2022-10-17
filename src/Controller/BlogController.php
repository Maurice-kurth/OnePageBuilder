<?php

namespace App\Controller;

use App\Entity\BlogPost;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;

class BlogController extends AbstractController
{
    #[Route('/blog', name: 'app_blog')]
    public function index(ManagerRegistry $doctrine): Response
    {
        //get all blogposts from database with doctrine
        $blogPosts = $doctrine->getRepository(BlogPost::class)->findAll();
      
        return $this->render('blog/archive.html.twig', [
            'blogPosts' => $blogPosts,
        ]);
    }

    //Show a single blogpost by id
    #[Route('/blog/{id}', name: 'single_post')]
    public function show(BlogPost $blogPost): Response
    {
        return $this->render('blog/show.html.twig', [
            'post' => $blogPost,
        ]);
    }

   
}
