import {Place} from '../place/place.model'
import {AccommodationType} from '../accommodation-type/accommodation-type.model'

export class Accommodation
{
    Id: number;
    Name: string; 
    Decription: string; 
    Address: string;
    AverageGrade: number;
    Latitude: number;
    Longitude: number;
    ImageUrl: string;
    Approved: boolean;
    AccTypeId: number;
    PlaceId: number;
    OwnerId: number;

    constructor(name: string, decription: string, address: string, averageGrade: number, latitude: number, longitude: number, imgUrl: string, approved: boolean, accType: number, place: number, owner: number)
    {
        this.Name = name;
        this.Decription = decription;
        this.Address = address;
        this.AverageGrade = averageGrade;
        this.Latitude = latitude;
        this.Longitude = longitude;
        this.ImageUrl = imgUrl;
        this.Approved = approved;
        this.AccTypeId = accType;
        this.PlaceId = place;
        this.OwnerId = owner;
    }
}