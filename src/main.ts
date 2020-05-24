import { greeter } from './greeter';

class Student{
    fullName: string;
    // param에 public, private를 붙이는 것은 멤버 변수(fullName같은)를 따로 선언할 필요없이 프로퍼티를 생성하는 축약 방법.
    constructor(public age: number, public firstName: string, public lastName: string){ 
        this.fullName = `age: ${age}, name: ${lastName} ${firstName}`;
    }
}

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return `Hello, ww ${person.firstName} ${person.lastName}`;
// }

let user = new Student(27, 'HK', 'Lee');
// let user = {firstName: 'HK', lastName: 'Lee'};
// let user = "Jane User";
// let user = [0,1,2,3]; // 오류 메시지 출력. js파일은 생성됌. 일종의 경고인 셈. Argument of type 'number[]' is not assignable to parameter of type 'string'.

document.body.textContent = greeter(user);
// console.log(greeter(user));