export class RoomReservation
{
    StartDate: Date;
    EndDate: Date;
    Canceled: boolean;
    RoomId: number;
    UserId: number; 

    constructor(sDate: Date, eDate: Date, canceled: boolean, RoomId: number, UserId: number)
    {
        this.StartDate = sDate;
        this.EndDate = eDate;
        this.Canceled = canceled;
        this.RoomId = RoomId;
    	this.UserId = UserId; 
    }
}