<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;


class EditServerType extends AbstractType
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


        $builder->add('ftp_host', TextType::class, array('mapped' => false,'attr' => ['value'=> $user->getServerInfo()->getFtpHost()]));
        $builder->add('ftp_user', TextType::class, array('mapped' => false, 'attr' => ['value'=> $user->getServerInfo()->getFtpUser()] ));
        $builder->add('ftp_pass', PasswordType::class, array('mapped' => false, 'attr' => ['type' => 'password', 'value'=> $user->getServerInfo()->getFtpPass()] ));
        $builder->add('save', SubmitType::class, ['label' => 'Sauvegarder mes modifications']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
