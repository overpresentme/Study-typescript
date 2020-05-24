var Student = /** @class */ (function () {
    // param에 public, private를 붙이는 것은 멤버 변수(fullName같은)를 따로 선언할 필요없이 프로퍼티를 생성하는 축약 방법.
    function Student(age, firstName, lastName) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "age: " + age + ", name: " + lastName + " " + firstName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, ww " + person.firstName + " " + person.lastName;
}
var user = new Student(27, 'HK', 'Lee');
// let user = {firstName: 'HK', lastName: 'Lee'};
// let user = "Jane User";
// let user = [0,1,2,3]; // 오류 메시지 출력. js파일은 생성됌. 일종의 경고인 셈. Argument of type 'number[]' is not assignable to parameter of type 'string'.
document.body.textContent = greeter(user);
