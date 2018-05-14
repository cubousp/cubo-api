import { Server } from './server'

const main = async() => {
    await Server.start()
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
}

main()
