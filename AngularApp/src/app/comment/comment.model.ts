export class Comment
{
    Id: number;
    Grade: number;
    Text: string;
    AccId: number 
    USerId: number 

    constructor(grade: number, text: string, accommId: number, userId: number)
    {
        this.Grade = grade;
        this.Text = text;
	    this.AccId = accommId;
        this.USerId = userId;
    }
}