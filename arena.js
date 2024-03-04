const Arena = require('bull-arena');
const express = require('express');
const app = express();

const arena = Arena({
  Bull: require('bull'), // Import Bull
  queues: [
    {
      name: 'crawling', // Name of your Bull Queue
      hostId: 'localhost', // Host ID
      type: 'bull', // Type of queue
      redis: {
        port: 6379, // Redis port
        host: 'localhost', // Redis host
        // password: 'your-redis-password', // Redis password
      },
    },
  ],
});

app.use('/arena', arena);

app.listen(3000, () => {
  console.log('Arena is running on http://localhost:3000/arena');
});
