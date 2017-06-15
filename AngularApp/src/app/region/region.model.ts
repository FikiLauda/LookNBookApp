import {Country} from '../country/country.model'

export class Region
{
    Id: number;
    Name: string;
    CountryId: number;

    constructor(name: string, countryId: number)
    {
        this.Name = name;
        this.CountryId = countryId;
    }
}