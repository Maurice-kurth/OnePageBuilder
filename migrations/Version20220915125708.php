<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220915125708 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE site_web DROP FOREIGN KEY FK_E154097176C50E4A');
        $this->addSql('DROP INDEX UNIQ_E154097176C50E4A ON site_web');
        $this->addSql('ALTER TABLE site_web DROP proprietaire_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE site_web ADD proprietaire_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE site_web ADD CONSTRAINT FK_E154097176C50E4A FOREIGN KEY (proprietaire_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E154097176C50E4A ON site_web (proprietaire_id)');
    }
}
