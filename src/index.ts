import { config } from 'dotenv'

config()

console.log(`Hello ${process.env.APP_NAME ?? 'World'}!`)
