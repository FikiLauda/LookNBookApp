import {Country} from '../country/country.model'

export class Region
{
    Id: number;
    Name: string;
    Ctry: Country;

    constructor(name: string, ctry: Country)
    {
        this.Name = name;
        this.Ctry = ctry;
    }
}