import {Region} from '../region/region.model'
export class Place
{
    Id: number;
    Name: string;
    Reg: Region;

    constructor(id: number, name: string, reg: Region)
    {
        this.Id = id;
        this.Name = name;
        this.Reg = reg;
    }
}