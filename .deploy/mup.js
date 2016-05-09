module.exports = {
  servers: {
    one: {
      host: '104.236.71.197',
      username: 'root',
      password: 'Dentonrage1',
      // pem: './mykey',
    },
  },

  meteor: {
    name: 'dentonRevival-admin',
    path: '../',
    servers: {
      one: {
        host: '104.236.71.197',
        username: 'root',
      },
    },
    env: {
      ROOT_URL: 'http://dentonrevival.learn-everything.io:5678',
      MONGO_URL: 'mongodb://localhost/meteor',
      PORT: 5678
    },
    //deployCheckWaitTime: 60 //default 10
  },
  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
