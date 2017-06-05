namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class allClasses : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Accommodations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 256),
                        Description = c.String(maxLength: 1000),
                        Address = c.String(nullable: false, maxLength: 256),
                        AverageGrade = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Latitude = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Longitude = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ImageUrl = c.String(nullable: false),
                        Approved = c.Boolean(nullable: false),
                        AccTypeId = c.Int(nullable: false),
                        PlaceId = c.Int(nullable: false),
                        OwnerId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AppUsers", t => t.OwnerId, cascadeDelete: true)
                .ForeignKey("dbo.Places", t => t.PlaceId, cascadeDelete: true)
                .ForeignKey("dbo.AccommodationTypes", t => t.AccTypeId, cascadeDelete: true)
                .Index(t => t.AccTypeId)
                .Index(t => t.PlaceId)
                .Index(t => t.OwnerId);
            
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        AccId = c.Int(nullable: false),
                        USerId = c.Int(nullable: false),
                        Grade = c.Int(nullable: false),
                        Text = c.String(maxLength: 300),
                    })
                .PrimaryKey(t => new { t.AccId, t.USerId })
                .ForeignKey("dbo.Accommodations", t => t.AccId, cascadeDelete: false)
                .ForeignKey("dbo.AppUsers", t => t.USerId, cascadeDelete: true)
                .Index(t => t.AccId)
                .Index(t => t.USerId);
            
            CreateTable(
                "dbo.Places",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 256),
                        RegionId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Regions", t => t.RegionId, cascadeDelete: true)
                .Index(t => t.RegionId);
            
            CreateTable(
                "dbo.Regions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 256),
                        CountryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Countries", t => t.CountryId, cascadeDelete: true)
                .Index(t => t.CountryId);
            
            CreateTable(
                "dbo.Countries",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 256),
                        Code = c.String(nullable: false, maxLength: 3),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AccommodationTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RoomReservations",
                c => new
                    {
                        RoomId = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                        Timestamp = c.Binary(nullable: false, fixedLength: true, timestamp: true, storeType: "rowversion"),
                    })
                .PrimaryKey(t => new { t.RoomId, t.UserId })
                .ForeignKey("dbo.Rooms", t => t.RoomId, cascadeDelete: false)
                .ForeignKey("dbo.AppUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.RoomId)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoomNumber = c.Int(nullable: false),
                        BedCount = c.Int(nullable: false),
                        Description = c.String(nullable: false, maxLength: 1000),
                        PricePerNight = c.Int(nullable: false),
                        AccId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accommodations", t => t.AccId, cascadeDelete: true)
                .Index(t => t.AccId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RoomReservations", "UserId", "dbo.AppUsers");
            DropForeignKey("dbo.RoomReservations", "RoomId", "dbo.Rooms");
            DropForeignKey("dbo.Rooms", "AccId", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "AccTypeId", "dbo.AccommodationTypes");
            DropForeignKey("dbo.Places", "RegionId", "dbo.Regions");
            DropForeignKey("dbo.Regions", "CountryId", "dbo.Countries");
            DropForeignKey("dbo.Accommodations", "PlaceId", "dbo.Places");
            DropForeignKey("dbo.Accommodations", "OwnerId", "dbo.AppUsers");
            DropForeignKey("dbo.Comments", "USerId", "dbo.AppUsers");
            DropForeignKey("dbo.Comments", "AccId", "dbo.Accommodations");
            DropIndex("dbo.Rooms", new[] { "AccId" });
            DropIndex("dbo.RoomReservations", new[] { "UserId" });
            DropIndex("dbo.RoomReservations", new[] { "RoomId" });
            DropIndex("dbo.Regions", new[] { "CountryId" });
            DropIndex("dbo.Places", new[] { "RegionId" });
            DropIndex("dbo.Comments", new[] { "USerId" });
            DropIndex("dbo.Comments", new[] { "AccId" });
            DropIndex("dbo.Accommodations", new[] { "OwnerId" });
            DropIndex("dbo.Accommodations", new[] { "PlaceId" });
            DropIndex("dbo.Accommodations", new[] { "AccTypeId" });
            DropTable("dbo.Rooms");
            DropTable("dbo.RoomReservations");
            DropTable("dbo.AccommodationTypes");
            DropTable("dbo.Countries");
            DropTable("dbo.Regions");
            DropTable("dbo.Places");
            DropTable("dbo.Comments");
            DropTable("dbo.Accommodations");
        }
    }
}
