// import { readFileSync } from "fs";
// import { createClient } from "redis";



// const client = createClient({
//     username: 'default', // use your Redis user. More info https://redis.io/docs/management/security/acl/
//     password: 'secret', // use your password here
//     socket: {
//         host: 'my-redis.cloud.redislabs.com',
//         port: 6379,
//         tls: true,
//         key: readFileSync('./redis_user_private.key'),
//         cert: readFileSync('./redis_user.crt'),
//         ca: [readFileSync('./redis_ca.pem')]
//     }
// });

// client.on('error', (err) => console.log('Redis Client Error', err));


// async function connectRedis() {
//     await client.connect();
// }
