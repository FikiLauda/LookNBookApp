import {Country} from '../country/country.model'

export class Region
{
    Id: number;
    Name: string;
    CtryId: number;

    constructor(name: string, ctryId: number)
    {
        this.Name = name;
        this.CtryId = ctryId;
    }
}