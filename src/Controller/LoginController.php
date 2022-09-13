<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils): Response
      {
         // get the login error if there is one
         $error = $authenticationUtils->getLastAuthenticationError();

         // last username entered by the user
         $lastUsername = $authenticationUtils->getLastUsername();

          return $this->render('login/index.html.twig', [
             'last_username' => $lastUsername,
             'error'         => $error,
          ]);

          //If login is successful, redirect to builder form
            return $this->redirectToRoute('builder_form');

     
        }
        
    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout()
     {
         // controller can be blank: it will never be called!
         throw new \Exception('Don\'t forget to activate logout in security.yaml');
     }

    
    #[Route('/logged_out', name: 'app_logged_out')]
    public function loggedOut()
    {
        return $this->render('login/logged_out.html.twig');
    }

          
}
