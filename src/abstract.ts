abstract class Employee {
    constructor(private firstName: string) {}
    abstract getSalary(input:number):number;
    get fullName():string{
        return `My name is ${this.firstName}`
    }
}

class fullTimeEmployee extends Employee {
    constructor(firstName: string){
        super(firstName)
    }
    getSalary(input: number): number {
        return input;
    }
}

const employee3 = new fullTimeEmployee('Manzi');

console.log(employee3.getSalary(2))