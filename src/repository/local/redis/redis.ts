const Redis = require("ioredis");

const username = "userID";
const password = "123456"

new Redis(); 
new Redis(6380); 
new Redis(6379, "192.168.1.1"); 
new Redis("/tmp/redis.sock");
new Redis({
  port: 6379, 
  host: "127.0.0.1", 
  username: "app",
  password: password,
  db: 0, 
});


new Redis(`redis://${username}:${password}@127.0.0.1:6380/4`);