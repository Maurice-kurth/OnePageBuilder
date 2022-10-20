<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\ContactInfo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


//This form allows the user to edit his contact information coming from the contactInfo entity

class EditContactInfoType extends AbstractType
{

    private $security; 

   public function __construct(Security $security)
    {
        // Avoid calling getUser() in the constructor: auth may not
        // be complete yet. Instead, store the entire Security object.
        $this->security = $security;
    }
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        // Get the current user
        $user = $this->security->getUser();
 
        $builder->add('email', TextType::class, array('mapped' => false,'attr' => ['value'=> $user->getContactInfo()->getEmail() ]));
        $builder->add('telephone', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getTelephone()] ));
        $builder->add('facebook', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getFacebook()] ));
        $builder->add('twitter', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getTwitter()] ));
        $builder->add('instagram', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getInstagram()] ));
        $builder->add('code_postal', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getCodePostal()] ));
        $builder->add('ville', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getVille()] ));
        $builder->add('adresse', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getAdresse()] ));
        $builder->add('horaires', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getContactInfo()->getHoraires()] ));

        $builder->add('save', SubmitType::class, ['label' => 'Sauvegarder mes modifications', 'attr' => ['type' => 'submit']]);
    

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
