<?php

namespace App\Entity;

use App\Repository\ServerInfoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ServerInfoRepository::class)]
class ServerInfo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?User $user = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ftp_host = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ftp_user = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ftp_pass = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ftp_port = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getFtpHost(): ?string
    {
        return $this->ftp_host;
    }

    public function setFtpHost(?string $ftp_host): self
    {
        $this->ftp_host = $ftp_host;

        return $this;
    }

    public function getFtpUser(): ?string
    {
        return $this->ftp_user;
    }

    public function setFtpUser(?string $ftp_user): self
    {
        $this->ftp_user = $ftp_user;

        return $this;
    }

    public function getFtpPass(): ?string
    {
        return $this->ftp_pass;
    }

    public function setFtpPass(?string $ftp_pass): self
    {
        $this->ftp_pass = $ftp_pass;

        return $this;
    }

    public function getFtpPort(): ?string
    {
        return $this->ftp_port;
    }

    public function setFtpPort(?string $ftp_port): self
    {
        $this->ftp_port = $ftp_port;

        return $this;
    }
}
