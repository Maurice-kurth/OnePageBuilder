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
        $miniSiteDir = $this->local_websites_dir . '\userwebsites\\' .$user->getUsername() ;
      
        //full path on local = "F:/wamp64/www/LCDZ/OnePage/onepage/userwebsites/username";
       

        $OnePageFilesDirectory = $miniSiteDir . '/*';

        $htmlFile = $miniSiteDir . '\index.html';
        $cssFile = $miniSiteDir . '\bulma.min.css';
        $cssFolder = $miniSiteDir . '\css';
        $imageFolder = $miniSiteDir . '\images';

       // $remote_server_dir = 'maurice/minisites';
        $remote_server_dir = '';
        //Connect to FTP server using the credentials
        $ftp_connection = ftp_connect($ftp_host) or die("Could not connect to $ftp_host");
        ftp_login($ftp_connection, $ftp_user, $ftp_pass) or die("Could not login as $ftp_user");
        ftp_pasv($ftp_connection, true);

        //Files already on the server
        $files_on_server = ftp_nlist($ftp_connection, $remote_server_dir);

    
      
        //Create a /css folder on the server
        if(!in_array('css', $files_on_server)){
            ftp_mkdir($ftp_connection, $remote_server_dir . '/css');
        }else{
            //Do nothing
        }
        //Permissions for the CSS folder
         $permissions =  ftp_chmod($ftp_connection,0775,  $remote_server_dir . '/css');
   
        //Create a /images folder on the server
        if(!in_array('images', $files_on_server)){
            ftp_mkdir($ftp_connection, $remote_server_dir . '/images');
        }else{
            //Do nothing
        }
        //Permissions for the images folder
        $permissions =  ftp_chmod($ftp_connection,0775,  $remote_server_dir . '/images');
   
      
        //Upload $htmlFile to the server
        if (ftp_put($ftp_connection, $remote_server_dir . '/index.html', $htmlFile, FTP_BINARY)) {
           // echo "Successfully uploaded $htmlFile to $ftp_host as $remote_server_dir/index.html" . '<br/>';
        } else {
            //echo "Error uploading $htmlFile to $ftp_host";
        }
      
       
        //Upload each file in $cssFolder to the server in the /css folder
        foreach (glob($cssFolder . '/*') as $file) {
            if (ftp_put($ftp_connection, $remote_server_dir . '/css/' . basename($file), $file, FTP_BINARY)) {
             //   echo "Successfully uploaded $file to $ftp_host as $remote_server_dir/css/" . basename($file) . '<br/>';
            } else {
               // echo "Error uploading $file to $ftp_host";
            }
        }

        //Upload each file in $imageFolder to the server in the /images folder
        foreach (glob($imageFolder . '/*') as $file) {
            if (ftp_put($ftp_connection, $remote_server_dir . '/images/' . basename($file), $file, FTP_BINARY)) {
               // echo "Successfully uploaded $file to $ftp_host as $remote_server_dir/images/" . basename($file) . '<br/>';
            } else {
              //  echo "Error uploading $file to $ftp_host";
            }
        }
        
        //Close the FTP connection
        ftp_close($ftp_connection);

     //   return $remote_server_dir;

     
        //$file_contents = file_get_contents($miniSiteDir . '/' . $OnePagefilesDirectory);

       // return $file_contents;

       return 'ok';
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

        //copy the onepageDefault.css file to the user folder
        copy($this->local_websites_dir . '/public/css/onepageDefault.css', $this->local_websites_dir . '/userwebsites/default/onepageDefault.css');
        copy($this->local_websites_dir . '/userwebsites/default/onepageDefault.css', $miniSiteDir . '/css/onepageDefault.css');
        //set the file permission to 777
        //chmod($miniSiteDir . '/css/onepageDefault.css', 0777);
        //copy minBulma.css to the user folder
        copy($this->local_websites_dir . '/userwebsites/default/defaultBulma.min.css', $miniSiteDir . '/css/bulma.min.css');
        //set the file permission to 777
        //chmod($miniSiteDir . '/css/bulma.min.css', 0777);

        //for each image in the images folder copy, it to the user folder
        $images = glob($this->local_websites_dir . '/public/images/uploads'.$user->getUsername());
        foreach ($images as $image) {
            copy($image, $miniSiteDir . '/images/' . basename($image));
        }

        return $renderedFile;
    }
}
