export class NewUser
{
    Name: string;
    Surname: string;
    Email: string;
    Pass: string;
    ConfPass: string;
    Role: string;

    constructor(name: string, surname: string, email: string, pass: string, confPass: string, role: string)
    {
        this.Name = name;
        this.Surname = surname;
        this.Email = email;
        this.Pass = pass;
        this.ConfPass = confPass;
        this.Role = role;
    }
}