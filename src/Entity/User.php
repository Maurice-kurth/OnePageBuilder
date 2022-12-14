<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['username'], message: 'Nom de compte indisponible')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\OneToOne(inversedBy: 'proprietaire', cascade: ['persist', 'remove'])]
    private ?SiteWeb $siteweb = null;

    #[ORM\OneToOne(mappedBy: 'user', cascade: ['persist', 'remove'])]
    private ?ServerInfo $serverInfo = null;

    #[ORM\OneToOne(mappedBy: 'utilisateur', cascade: ['persist', 'remove'])]
    private ?ContactInfo $contactInfo = null;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getSiteweb(): ?SiteWeb
    {
        return $this->siteweb;
    }

    public function setSiteweb(?SiteWeb $siteweb): self
    {
        $this->siteweb = $siteweb;

        return $this;
    }

    public function getServerInfo(): ?ServerInfo
    {
        return $this->serverInfo;
    }

    public function setServerInfo(?ServerInfo $serverInfo): self
    {
        // unset the owning side of the relation if necessary
        if ($serverInfo === null && $this->serverInfo !== null) {
            $this->serverInfo->setUser(null);
        }

        // set the owning side of the relation if necessary
        if ($serverInfo !== null && $serverInfo->getUser() !== $this) {
            $serverInfo->setUser($this);
        }

        $this->serverInfo = $serverInfo;

        return $this;
    }

    public function getContactInfo(): ?ContactInfo
    {
        return $this->contactInfo;
    }

    public function setContactInfo(ContactInfo $contactInfo): self
    {
        // set the owning side of the relation if necessary
        if ($contactInfo->getUtilisateur() !== $this) {
            $contactInfo->setUtilisateur($this);
        }

        $this->contactInfo = $contactInfo;

        return $this;
    }
}
