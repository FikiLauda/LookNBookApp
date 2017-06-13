export class Country
{
    Id: number;
    Name: string;
    Code: string;

    constructor(name: string, code: string)
    {
        this.Name = name;
        this.Code = code;
    }
}