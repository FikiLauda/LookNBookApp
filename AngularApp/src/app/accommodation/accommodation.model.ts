import {AccommodationType} from '../accommodation-type/accommodation-type.model'
import {Place} from '../place/place.model'

export class Accommodation
{
    Id: number;
    Name: string; 
    Decription: string; 
    Address: string;
    AverageGrade: number;
    Latitude: number;
    Longitude: number;
    ImgUrl: string;
    Approved: boolean;
    AccType: AccommodationType;
    Place: Place;

    constructor(name: string, decription: string, address: string, averageGrade: number, latitude: number, longitude: number, imgUrl: string, approved: boolean, accType: AccommodationType, place: Place)
    {
        this.Name = name;
        this.Decription = decription;
        this.Address = address;
        this.AverageGrade = averageGrade;
        this.Latitude = latitude;
        this.Longitude = longitude;
        this.ImgUrl = imgUrl;
        this.Approved = approved;
        this.AccType = accType;
        this.Place = place;
    }
}