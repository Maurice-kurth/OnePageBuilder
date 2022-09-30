<?php 
namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class ProductType extends AbstractType{
    public function buildForm(FormBuilderInterface $builder, array $options){
        $builder
         //add a button to add more products that is not part of the collection
            // ->add('ajouter', ButtonType::class, ['label' => 'Ajouter un nouveau produit', 'attr' => array('class'=>'addProduct')])
            ->add('Name')
            ->add('Price')
            ->add('Description');
    }
}