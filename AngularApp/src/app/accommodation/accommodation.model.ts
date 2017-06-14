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
    AccTypeId: number;
    PlaceId: number;

    constructor(name: string, decription: string, address: string, averageGrade: number, latitude: number, longitude: number, imgUrl: string, approved: boolean, accTypeId: number, placeId: number)
    {
        this.Name = name;
        this.Decription = decription;
        this.Address = address;
        this.AverageGrade = averageGrade;
        this.Latitude = latitude;
        this.Longitude = longitude;
        this.ImgUrl = imgUrl;
        this.Approved = approved;
        this.AccTypeId = accTypeId;
        this.PlaceId = placeId;
    }
}