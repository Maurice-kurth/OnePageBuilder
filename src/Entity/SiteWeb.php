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

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $theme_colors = [];

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $products = null;

    #[ORM\OneToOne(mappedBy: 'siteweb', cascade: ['persist', 'remove'])]
    private ?User $proprietaire = null;


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

    public function getProprietaire(): ?User
    {
        return $this->proprietaire;
    }

    public function setProprietaire(?User $proprietaire): self
    {
        // unset the owning side of the relation if necessary
        if ($proprietaire === null && $this->proprietaire !== null) {
            $this->proprietaire->setSiteweb(null);
        }

        // set the owning side of the relation if necessary
        if ($proprietaire !== null && $proprietaire->getSiteweb() !== $this) {
            $proprietaire->setSiteweb($this);
        }

        $this->proprietaire = $proprietaire;

        return $this;
    }
}
