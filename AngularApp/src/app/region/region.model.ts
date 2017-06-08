import {Country} from '../country/country.model'

export class Region
{
    Id: number;
    Name: string;
    Ctry: Country;

    constructor(id: number, name: string, ctry: Country)
    {
        this.Id = id;
        this.Name = name;
        this.Ctry = ctry;
    }
}