<?php

namespace App\Entity;

use App\Repository\SiteWebRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SiteWebRepository::class)]
class SiteWeb
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_site = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description_site = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $proprietaire = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $theme_colors = [];

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $products = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomSite(): ?string
    {
        return $this->nom_site;
    }

    public function setNomSite(string $nom_site): self
    {
        $this->nom_site = $nom_site;

        return $this;
    }

    public function getDescriptionSite(): ?string
    {
        return $this->description_site;
    }

    public function setDescriptionSite(?string $description_site): self
    {
        $this->description_site = $description_site;

        return $this;
    }

    public function getProprietaire(): ?string
    {
        return $this->proprietaire;
    }

    public function setProprietaire(?string $proprietaire): self
    {
        $this->proprietaire = $proprietaire;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getThemeColors(): array
    {
        return $this->theme_colors;
    }

    public function setThemeColors(array $theme_colors): self
    {
        $this->theme_colors = $theme_colors;

        return $this;
    }

    public function getProducts(): ?array
    {
        return $this->products;
    }

    public function setProducts(?array $products): self
    {
        $this->products = $products;

        return $this;
    }
}
