<?php

namespace App\Service;

class FtpService
{

    private $local_websites_dir;

    public function __construct( 
        string $local_websites_dir
    ) {
        $this->local_websites_dir = $local_websites_dir;
    }

    public function sendFile($file, $ftp_host, $ftp_user, $ftp_pass): string
    {
        // TODO : Put in config file

        /*$ftp_host = "ssh.cluster010.hosting.ovh.net";
        $ftp_user = "lacouleu";
        $ftp_pass = "RemiZCEF";*/


        //full path on local = "F:/wamp64/www/LCDZ/OnePage/onepage/src/websites";
        $miniSiteDir = $this->local_websites_dir . '/src/websites/';


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

        
        $miniSiteDir = $this->local_websites_dir . '/src/websites/';

        //save the rendered file to the server
        $file = fopen($miniSiteDir . $nomFichier . ".html", "w");
        fwrite($file, $renderedFile);
        fclose($file);

        return $renderedFile;
    }
}
