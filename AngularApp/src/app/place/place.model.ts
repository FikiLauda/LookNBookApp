import {Region} from '../region/region.model'
export class Place
{
    Id: number;
    Name: string;
    Reg: Region;

    constructor(name: string, reg: Region)
    {
        this.Name = name;
        this.Reg = reg;
    }
}