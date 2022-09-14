<?php 
namespace App\Service;

class StatusMessageGenerator
{
    public function getStatusMessage(): string
    {
        $message = "Projet en construction";

        return $message;
    }
}