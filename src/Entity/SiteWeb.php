<?php

namespace App\Entity;

use App\Repository\SiteWebRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: SiteWebRepository::class)]
#[Vich\Uploadable]
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

   

    #[ORM\Column(nullable: true)]
    private ?array $faq = null ;

    // NOTE: This is not a mapped field of entity metadata, just a simple property.
    #[Vich\UploadableField(mapping: 'siteweb', fileNameProperty: 'imageName')]
    private ?File $imageFile = null;

    #[ORM\Column(type: 'string')]
    private ?string $imageName = null;



  /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }


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

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageName(?string $imageName): void
    {
        $this->imageName = $imageName;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

 


    public function getFaq(): array
    {
        return $this->faq;
    }

    public function setFaq(?array $faq): self
    {
        $this->faq = $faq;

        return $this;
    }
}
