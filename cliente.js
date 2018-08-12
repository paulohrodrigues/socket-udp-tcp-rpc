var jayson = require('jayson');

var client = jayson.client.http({
  port: 3000
});

client.request('cpf', ["107.823.004-81"], function(err, response) {
  if(err) throw err;
  console.log(response.result); // 2
});