namespace Person {
    export function setName(name: string) {
       return name
    }
    export function setAge(age: number): number{
        return age;
    }
 }
 
 const res = Person.setName("john doe")
 console.log(res)
 console.log(Person.setAge(12))