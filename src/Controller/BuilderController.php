<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\SiteWeb;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;



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
    public function buildForm(Request $request, ManagerRegistry $doctrine): Response
    {
        //Create a new SiteWeb object and initialize it with some data for this example
        $siteWeb = new SiteWeb();
        $siteWeb->setCreatedAt(new \DateTimeImmutable('now'));
        $siteWeb->setThemeColors(['red, blue, green']);
        $siteWeb->setProprietaire('LCDZ défaut');
        $siteWebForm = $this->createFormBuilder($siteWeb)
            ->add('nom_site', TextType::class)
            ->add('description_site', TextType::class)
            ->add('proprietaire', TextType::class)
            ->add('save', SubmitType::class, ['label' => 'Créer mon SiteWeb'])
            ->getForm();


        //Handle the request
        $siteWebForm->handleRequest($request);
        if ($siteWebForm->isSubmitted() && $siteWebForm->isValid()) {
            // $form->getData() holds the submitted values
            $siteWeb = $siteWebForm->getData();

            // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!
            $entityManager = $doctrine->getManager();
            $entityManager->persist($siteWeb);
            $entityManager->flush();

            return $this->redirectToRoute('builderSuccess');
        }

      


        return $this->renderForm('builder/buildform.html.twig', [
        'siteWebForm' => $siteWebForm,
        ]);



    }
     /**
    * @Route("/builder/success", name="builderSuccess")
    */
    public function builderSuccess(): Response
    {
      return $this->render('builder/builderSuccess.html.twig');
    }
 
}