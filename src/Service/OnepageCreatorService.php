<?php

namespace App\Service;

use App\Entity\SiteWeb;
use Symfony\Component\Security\Core\Security;
use Monolog\DateTimeImmutable;
//Ce Service permet de créer un site web à partir des données du formulaire
//Il est appelé à partir du Controller JsBuilderController (en POST)
//Il récupère $data qui est un FormData avec des variables (String, tableaux, objets) et des fichiers (fileType)
class OnePageCreatorService
{
    private $local_websites_dir;
    private $security;
    public function __construct(string $local_websites_dir, Security $security,)
    {

        $this->local_websites_dir = $local_websites_dir;
        $this->security = $security;
    }

    //Vérifie si le site web existe déjà en bdd : si oui, il le met à jour, sinon il le crée
    //Pareil pour le dossier correspondant
    public function checkUpdateOrCreate()
    {

        //Créé un site web si l'utilisateur n'en a pas
        $user = $this->security->getUser();
        $siteWeb = $user->getSiteWeb();

        if ($siteWeb == null) {
            $siteWeb = new SiteWeb();
            $siteWeb->setProprietaire($user);
            $siteWeb->setCreatedAt(new DateTimeImmutable('now'));
        }

        $project_dir = $this->local_websites_dir;

        //Créé un dossier pour l'utilisateur sur le dossier SF 
        $destination_root = $project_dir . '/public/images/uploads/' . $user->getUsername();
        if (!file_exists($destination_root)) {
            mkdir($destination_root, 0777, true);
        }

        //Créé un dossier pour l'utilisateur si il n'existe pas
        if (!file_exists($project_dir . '/userwebsites/' . $user->getUsername())) {
            mkdir($project_dir . '/userwebsites/' . $user->getUsername(), 0777, true);
            mkdir($project_dir . '/userwebsites/' . $user->getUsername() . '/css', 0777, true);
            mkdir($project_dir . '/userwebsites/' . $user->getUsername() . '/images', 0777, true);

        }


    }

    public function getFormData($data, $request)
    {

        $user = $this->security->getUser();
        //**** Attribute data - Affectation par défaut en cas de données vides. ****//

        //Section Informations générales
        $siteName = $data['nom_site'];
        $siteDescription = $data['presentationSite'];

        $project_dir = $this->local_websites_dir;
        //Section Logo
        $destination = $project_dir . '/userwebsites/' . $user->getUsername() . '/';
        $destination_root = $project_dir . '/public/images/uploads/' . $user->getUsername() . '/';
        $siteLogo = $request->files->get('siteLogo') ?? "pas de logo" ;

       

        //Récupération du logo
        if (isset($siteLogo)) {
            //save $siteLogo to $destination folder
           // move_uploaded_file( $siteLogo, $destination_root."/sitelogo.png");
           move_uploaded_file( $siteLogo, $destination."/images/sitelogo.png");
           copy($destination."images/sitelogo.png", $destination_root."/sitelogo.png");
        }

        //Section Design et Thème
        $siteThemeColors = json_decode($data['themeColors'], true) ?? ['#000000', '#ffffff', '#333333'];

        //Section Produits ou Services
        $siteProducts = json_decode($data['products'], true) ?? [['name' => 'Product manquant', 'price' => 0, 'weight' => 1.6]];

        //Section FAQ
        $siteFAQ = json_decode($data['faq'], true) ?? [['question' => 'Question vide', 'reponse' => 'Réponse vide']];

        //Create a .txt file in the destination folder and write the data in it
        $file = fopen($destination . 'siteinfo.txt', 'w');
        fwrite($file, $siteName . "\n" . "\r" . 'Mis à jour le : '.date('d/m/Y H:i:s'));
        fclose($file);

        //exécuter la fonction qui va créer le site web
        return ($this->setWebsiteData($siteName, $siteDescription, $siteThemeColors, $siteProducts, $siteFAQ));
    }

    public function setWebsiteData($siteName, $siteDescription, $siteThemeColors, $siteProducts, $siteFAQ)
    {

        $user = $this->security->getUser();
        $siteWeb = $user->getSiteWeb();

        $siteWeb->setNomSite($siteName);
        $siteWeb->setDescriptionSite($siteDescription);

        //Couleurs
        $siteWeb->setThemeColors($siteThemeColors);

        //Propriétaire = User actuel
        $siteWeb->setProprietaire($user);

        //Set products of siteweb as an array of arrays
        $siteWeb->setProducts($siteProducts);

        //Set FAQ of siteweb as an array of arrays
        $siteWeb->setFaq($siteFAQ);
        return $siteWeb;
    }

}
