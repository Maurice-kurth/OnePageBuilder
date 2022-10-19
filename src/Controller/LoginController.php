<?php

namespace App\Controller;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Form\EditServerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use App\Entity\User;
use App\Entity\ServerInfo;

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
        return $this->redirectToRoute('builder_form_js');
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

    //Show the user profile
    #[Route('/profile', name: 'app_profile')]
    public function profile(Request $request, EntityManagerInterface $entityManager) : Response
    {
        $user = $this->getUser();

        $serverInfo = $user->getServerInfo();

        //Create the FTP Server form
        $editServerForm = $this->createForm(EditServerType::class, $user);

        //Create
        
        
        //Handling the form
        //TODO : Refactoriser tout ça
        $editServerForm->handleRequest($request);
        if ($editServerForm->isSubmitted() && $editServerForm->isValid()) {
            //Change user's properties
            $user = $editServerForm->getData();
            //Get the ftpInfo field of the form
            $ftpHost = $editServerForm->get('ftp_host')->getData();
            $ftpUser = $editServerForm->get('ftp_user')->getData();
            $ftpPass = $editServerForm->get('ftp_pass')->getData();
            //Set the ftpInfo property of the serverinfo
            $serverInfo->setFtpHost($ftpHost);
            $serverInfo->setFtpUser($ftpUser);
            $serverInfo->setFtpPass($ftpPass);

            $entityManager->persist($user);
            $entityManager->persist($serverInfo);
            $entityManager->flush();
        }


        return $this->render('login/profile.html.twig', [
            'user' => $this->getUser(),
            'editServerForm' => $editServerForm->createView(),

        ]);
    }
}
