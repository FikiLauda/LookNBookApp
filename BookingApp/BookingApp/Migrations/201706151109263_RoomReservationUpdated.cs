namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RoomReservationUpdated : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.RoomReservations", "canceled", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.RoomReservations", "canceled");
        }
    }
}
