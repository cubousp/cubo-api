export class Story {

    public id: string
    public message: string

    constructor(data: {
        id: string,
        message: string
    }) {
        this.id = data.id
        this.message = data.message
    }
}