export class Room
{
    Id: number;
    RoomNumber: number;
    BedCount: number;
    Description: string;
    PricePerNight: number;
    AccommId: number; 

    constructor(roomNumber: number, bedCount: number, description: string, pricePerNight: number, accommId: number)
    {
        this.RoomNumber = roomNumber;
        this.BedCount = bedCount;
        this.Description = description;
        this.PricePerNight = pricePerNight;
    	this.AccommId = accommId; 
    }
}