namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserRegUpdate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AppUsers", "Name", c => c.String());
            AddColumn("dbo.AppUsers", "Surname", c => c.String());
            DropColumn("dbo.AppUsers", "FullName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AppUsers", "FullName", c => c.Int(nullable: false));
            DropColumn("dbo.AppUsers", "Surname");
            DropColumn("dbo.AppUsers", "Name");
        }
    }
}
