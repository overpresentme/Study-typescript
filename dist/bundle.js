(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeter = void 0;
function greeter(person) {
    return "Hello, ww " + person.firstName + " " + person.lastName;
}
exports.greeter = greeter;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeter_1 = require("./greeter");
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
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return `Hello, ww ${person.firstName} ${person.lastName}`;
// }
var user = new Student(27, 'HK', 'Lee');
// let user = {firstName: 'HK', lastName: 'Lee'};
// let user = "Jane User";
// let user = [0,1,2,3]; // 오류 메시지 출력. js파일은 생성됌. 일종의 경고인 셈. Argument of type 'number[]' is not assignable to parameter of type 'string'.
document.body.textContent = greeter_1.greeter(user);
// console.log(greeter(user));

},{"./greeter":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXRlci50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDS0EsU0FBZ0IsT0FBTyxDQUFDLE1BQWM7SUFDbEMsT0FBTyxlQUFhLE1BQU0sQ0FBQyxTQUFTLFNBQUksTUFBTSxDQUFDLFFBQVUsQ0FBQztBQUM5RCxDQUFDO0FBRkQsMEJBRUM7Ozs7O0FDUEQscUNBQW9DO0FBRXBDO0lBRUksa0ZBQWtGO0lBQ2xGLGlCQUFtQixHQUFXLEVBQVMsU0FBaUIsRUFBUyxRQUFnQjtRQUE5RCxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFRLEdBQUcsZ0JBQVcsUUFBUSxTQUFJLFNBQVcsQ0FBQztJQUNsRSxDQUFDO0lBQ0wsY0FBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBRUQscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIsSUFBSTtBQUVKLHFDQUFxQztBQUNyQyxpRUFBaUU7QUFDakUsSUFBSTtBQUVKLElBQUksSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEMsaURBQWlEO0FBQ2pELDBCQUEwQjtBQUMxQix5SUFBeUk7QUFFekksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyw4QkFBOEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbnRlcmZhY2UgUGVyc29uIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXRlcihwZXJzb246IFBlcnNvbikge1xuICAgIHJldHVybiBgSGVsbG8sIHd3ICR7cGVyc29uLmZpcnN0TmFtZX0gJHtwZXJzb24ubGFzdE5hbWV9YDtcbn0iLCJpbXBvcnQgeyBncmVldGVyIH0gZnJvbSAnLi9ncmVldGVyJztcblxuY2xhc3MgU3R1ZGVudHtcbiAgICBmdWxsTmFtZTogc3RyaW5nO1xuICAgIC8vIHBhcmFt7JeQIHB1YmxpYywgcHJpdmF0ZeulvCDrtpnsnbTripQg6rKD7J2AIOuppOuyhCDrs4DsiJgoZnVsbE5hbWXqsJnsnYAp66W8IOuUsOuhnCDshKDslrjtlaAg7ZWE7JqU7JeG7J20IO2UhOuhnO2NvO2LsOulvCDsg53shLHtlZjripQg7LaV7JW9IOuwqeuylS5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWdlOiBudW1iZXIsIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZywgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcpeyBcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGBhZ2U6ICR7YWdlfSwgbmFtZTogJHtsYXN0TmFtZX0gJHtmaXJzdE5hbWV9YDtcbiAgICB9XG59XG5cbi8vIGludGVyZmFjZSBQZXJzb24ge1xuLy8gICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuLy8gICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdyZWV0ZXIocGVyc29uOiBQZXJzb24pIHtcbi8vICAgICByZXR1cm4gYEhlbGxvLCB3dyAke3BlcnNvbi5maXJzdE5hbWV9ICR7cGVyc29uLmxhc3ROYW1lfWA7XG4vLyB9XG5cbmxldCB1c2VyID0gbmV3IFN0dWRlbnQoMjcsICdISycsICdMZWUnKTtcbi8vIGxldCB1c2VyID0ge2ZpcnN0TmFtZTogJ0hLJywgbGFzdE5hbWU6ICdMZWUnfTtcbi8vIGxldCB1c2VyID0gXCJKYW5lIFVzZXJcIjtcbi8vIGxldCB1c2VyID0gWzAsMSwyLDNdOyAvLyDsmKTrpZgg66mU7Iuc7KeAIOy2nOugpS4ganPtjIzsnbzsnYAg7IOd7ISx65CMLiDsnbzsooXsnZgg6rK96rOg7J24IOyFiC4gQXJndW1lbnQgb2YgdHlwZSAnbnVtYmVyW10nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdzdHJpbmcnLlxuXG5kb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gZ3JlZXRlcih1c2VyKTtcbi8vIGNvbnNvbGUubG9nKGdyZWV0ZXIodXNlcikpOyJdfQ==
