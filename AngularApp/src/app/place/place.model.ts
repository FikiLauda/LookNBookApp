import {Region} from '../region/region.model'

export class Place
{
    Id: number;
    Name: string;
    RegionId: number;

    constructor(name: string, regionId: number)
    {
        this.Name = name;
        this.RegionId = regionId;
    }
}