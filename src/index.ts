import fastify from 'fastify'
import { env } from 'env'
// import admin from 'firebase-admin'
// import path from 'path'

// const serviceAccountKey = require(path.join(
//     process.cwd(),
//     'firebase_service_account_key.cfg.json'
// ))
//
// console.log(serviceAccountKey)
//
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccountKey),
//     databaseURL: 'https://dnd-dice-roll.firebaseio.com',
// })

const server = fastify({ logger: true })

server.get('/', (req, res) => {
    res.send('Hello there!')
})

server.listen(env.port, (err, addr) => {
    if (err) {
        server.log.error(err)
        process.exit(0)
    }

    server.log.info(`Listening on "${addr}`)
})
