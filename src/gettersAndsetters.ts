class Person {
    public _age: number;
    public firstName: string;
    public lastName: string;
    constructor(age:number,firstName: string, lastName: string) {
        this._age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get getAge(): number {
        return this._age;
    }
    set setAge(theAge: number){
        if ( theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid')
        }
        this._age = theAge;
    }
}

let person = new Person(26,'Manzi','Tresor');
// console.log(person);
person.setAge = 200;


