interface Person {
    firstName: string;
    lastName: string;
}

export function greeter(person: Person) {
    return `Hello, 22ww ${person.firstName} ${person.lastName}`;
}