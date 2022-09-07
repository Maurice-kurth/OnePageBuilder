<?php

namespace App\Form;

use App\Entity\SiteWeb;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SiteWeb1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom_site')
            ->add('description_site')
            ->add('proprietaire')
            ->add('created_at')
            ->add('theme_colors')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SiteWeb::class,
        ]);
    }
}
