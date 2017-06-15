export class NewUser
{
    Name: string;
    Surname: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    Role: string;

    constructor(name: string, surname: string, email: string, pass: string, confPass: string, role: string)
    {
        this.Name = name;
        this.Surname = surname;
        this.Email = email;
        this.Password = pass;
        this.ConfirmPassword = confPass;
        this.Role = role;
    }
}