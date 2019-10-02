const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=3000',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
    "apiSecretKey=",
    "apiURL="

  ],
  'client': [
    'NODE_ENV=',
    "apiSecretKey=",
    "apiURL="
  ],
};

module.exports = envBuild;