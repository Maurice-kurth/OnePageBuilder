<?php

namespace App\Service;

use Symfony\Component\Security\Core\Security;

class FtpService
{

    private $local_websites_dir;
    private $security;
    public function __construct( 
        string $local_websites_dir,
        Security $security
    ) {
        $this->local_websites_dir = $local_websites_dir;
        $this->security = $security;
    }

    public function sendFile( $ftp_host, $ftp_user, $ftp_pass): string
    {

        $user = $this->security->getUser();
        $miniSiteDir = $this->local_websites_dir . '/userwebsites/' .$user->getUsername() ;
      

        /*$ftp_host = "ssh.cluster010.hosting.ovh.net";
        $ftp_user = "lacouleu";
        $ftp_pass = "RemiZCEF";*/


        //full path on local = "F:/wamp64/www/LCDZ/OnePage/onepage/userwebsites/username";
       

        $file = $miniSiteDir . '/index.html';

        $remote_server_dir = 'maurice/minisites';

        //Connect to FTP server using the credentials
        $ftp_connection = ftp_connect($ftp_host) or die("Could not connect to $ftp_host");
        ftp_login($ftp_connection, $ftp_user, $ftp_pass) or die("Could not login as $ftp_user");
        ftp_pasv($ftp_connection, true);

        //Check if the file exists already on the server
        $files_on_server = ftp_nlist($ftp_connection, $remote_server_dir);


        if (!in_array($file, $files_on_server)) {
            echo "Le fichier $file n'existe pas sur le serveur, on le transfère" . "<br>";
            //Put the file in the remote server directory
            if (ftp_put($ftp_connection, $remote_server_dir . '/' . $file, $miniSiteDir . '/' . $file, FTP_BINARY)) {
                echo "Transfert du fichier $file terminé" . "<br>";
            } else {
                echo "Erreur lors du transfert du fichier $file" . "<br>";
            }
        } else {
            echo "Le fichier $file existe déjà sur le serveur, il a été mis à jour" . "<br>";
        }

        ftp_put($ftp_connection, $remote_server_dir . '/' . $file, $miniSiteDir . '/' . $file, FTP_BINARY);
        //close
        ftp_close($ftp_connection);

        $file_contents = file_get_contents($miniSiteDir . '/' . $file);

        return $file_contents;
    }

    public function saveFile($renderedFile, $nomFichier)
    {

        $user = $this->security->getUser();
        $miniSiteDir = $this->local_websites_dir . '/userwebsites/' .$user->getUsername() .'/' ;
      
        //transform $nomFichier into a slug and lowercase
        $slugFichier = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $nomFichier)));

        //save the rendered file to the user folder
        $file = fopen($miniSiteDir . "index.html", "w");
        fwrite($file, $renderedFile);
        fclose($file);

        //copy the onepagestyles.css file to the user folder
        copy($this->local_websites_dir . '/userwebsites/default/onepagestyles.css', $miniSiteDir . '/css/defaultStyle.css');
        //copy minBulma.css to the user folder
        copy($this->local_websites_dir . '/userwebsites/default/defaultBulma.min.css', $miniSiteDir . '/css/bulma.min.css');

        return $renderedFile;
    }
}
