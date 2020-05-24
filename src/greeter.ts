interface Person {
    firstName: string;
    lastName: string;
}

export function greeter(person: Person) {
    return `Hello, ww ${person.firstName} ${person.lastName}`;
}