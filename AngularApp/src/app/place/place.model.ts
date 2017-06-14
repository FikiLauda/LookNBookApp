export class Place
{
    Id: number;
    Name: string;
    RegId: number;

    constructor(name: string, regId: number)
    {
        this.Name = name;
        this.RegId = regId;
    }
}