(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeter = void 0;
function greeter(person) {
    return "Hello, 22ww " + person.firstName + " " + person.lastName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXRlci50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDS0EsU0FBZ0IsT0FBTyxDQUFDLE1BQWM7SUFDbEMsT0FBTyxpQkFBZSxNQUFNLENBQUMsU0FBUyxTQUFJLE1BQU0sQ0FBQyxRQUFVLENBQUM7QUFDaEUsQ0FBQztBQUZELDBCQUVDOzs7OztBQ1BELHFDQUFvQztBQUVwQztJQUVJLGtGQUFrRjtJQUNsRixpQkFBbUIsR0FBVyxFQUFTLFNBQWlCLEVBQVMsUUFBZ0I7UUFBOUQsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBUSxHQUFHLGdCQUFXLFFBQVEsU0FBSSxTQUFXLENBQUM7SUFDbEUsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQUVELHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLElBQUk7QUFFSixxQ0FBcUM7QUFDckMsaUVBQWlFO0FBQ2pFLElBQUk7QUFFSixJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLGlEQUFpRDtBQUNqRCwwQkFBMEI7QUFDMUIseUlBQXlJO0FBRXpJLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsOEJBQThCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW50ZXJmYWNlIFBlcnNvbiB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWV0ZXIocGVyc29uOiBQZXJzb24pIHtcbiAgICByZXR1cm4gYEhlbGxvLCAyMnd3ICR7cGVyc29uLmZpcnN0TmFtZX0gJHtwZXJzb24ubGFzdE5hbWV9YDtcbn0iLCJpbXBvcnQgeyBncmVldGVyIH0gZnJvbSAnLi9ncmVldGVyJztcblxuY2xhc3MgU3R1ZGVudHtcbiAgICBmdWxsTmFtZTogc3RyaW5nO1xuICAgIC8vIHBhcmFt7JeQIHB1YmxpYywgcHJpdmF0ZeulvCDrtpnsnbTripQg6rKD7J2AIOuppOuyhCDrs4DsiJgoZnVsbE5hbWXqsJnsnYAp66W8IOuUsOuhnCDshKDslrjtlaAg7ZWE7JqU7JeG7J20IO2UhOuhnO2NvO2LsOulvCDsg53shLHtlZjripQg7LaV7JW9IOuwqeuylS5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWdlOiBudW1iZXIsIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZywgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcpeyBcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGBhZ2U6ICR7YWdlfSwgbmFtZTogJHtsYXN0TmFtZX0gJHtmaXJzdE5hbWV9YDtcbiAgICB9XG59XG5cbi8vIGludGVyZmFjZSBQZXJzb24ge1xuLy8gICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuLy8gICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdyZWV0ZXIocGVyc29uOiBQZXJzb24pIHtcbi8vICAgICByZXR1cm4gYEhlbGxvLCB3dyAke3BlcnNvbi5maXJzdE5hbWV9ICR7cGVyc29uLmxhc3ROYW1lfWA7XG4vLyB9XG5cbmxldCB1c2VyID0gbmV3IFN0dWRlbnQoMjcsICdISycsICdMZWUnKTtcbi8vIGxldCB1c2VyID0ge2ZpcnN0TmFtZTogJ0hLJywgbGFzdE5hbWU6ICdMZWUnfTtcbi8vIGxldCB1c2VyID0gXCJKYW5lIFVzZXJcIjtcbi8vIGxldCB1c2VyID0gWzAsMSwyLDNdOyAvLyDsmKTrpZgg66mU7Iuc7KeAIOy2nOugpS4ganPtjIzsnbzsnYAg7IOd7ISx65CMLiDsnbzsooXsnZgg6rK96rOg7J24IOyFiC4gQXJndW1lbnQgb2YgdHlwZSAnbnVtYmVyW10nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdzdHJpbmcnLlxuXG5kb2N1bWVudC5ib2R5LnRleHRDb250ZW50ID0gZ3JlZXRlcih1c2VyKTtcbi8vIGNvbnNvbGUubG9nKGdyZWV0ZXIodXNlcikpOyJdfQ==
