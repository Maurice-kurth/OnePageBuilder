<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220915125951 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD siteweb_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649B07A7BD4 FOREIGN KEY (siteweb_id) REFERENCES site_web (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649B07A7BD4 ON user (siteweb_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649B07A7BD4');
        $this->addSql('DROP INDEX UNIQ_8D93D649B07A7BD4 ON user');
        $this->addSql('ALTER TABLE user DROP siteweb_id');
    }
}
