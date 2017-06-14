export class Comment
{
    Id: number;
    Grade: number;
    Text: string;
    AccommId: number 

    constructor(grade: number, text: string, accommId: number)
    {
        this.Grade = grade;
        this.Text = text;
	    this.AccommId = accommId;
    }
}