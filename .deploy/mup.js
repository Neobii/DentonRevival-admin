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
        port: 5678
      },
    },
    env: {
      ROOT_URL: 'http://104.236.71.197',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
  },
};