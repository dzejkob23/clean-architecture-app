export class User {

    readonly id: number
    readonly name: string
    readonly age: number

    constructor(name: string, age: number) {
        this.id = Math.random()
        this.name = name
        this.age = age
    }
}
