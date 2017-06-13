import {Accommodation} from '../accommodation/accommodation.model'
export class Room
{
    Id: number;
    RoomNumber: number;
    BedCount: number;
    Description: string;
    PricePerNight: number;
    Accomm: Accommodation 

    constructor(roomNumber: number, bedCount: number, description: string, pricePerNight: number, accomm: Accommodation)
    {
        this.RoomNumber = roomNumber;
        this.BedCount = bedCount;
        this.Description = description;
        this.PricePerNight = pricePerNight;
    	this.Accomm = accomm; 
    }
}