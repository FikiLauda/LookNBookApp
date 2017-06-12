import {Accommodation} from '../accommodation/accommodation.model'
export class Comment
{
    Grade: number;
    Text: string;
    Accomm: Accommodation 

    constructor(grade: number, text: string/*, accomm: Accommodation*/)
    {
        this.Grade = grade;
        this.Text = text;
	    //this.Accomm = accomm;
    }
}