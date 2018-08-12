var jayson = require('jayson');
var CPF = require('gerador-validador-cpf');

var server = jayson.server({
  cpf: function(args, callback) {
      if(args.length==1){
        callback(null, CPF.validate(args[0])==true ? "CPF válido" : "CPF inválido");
      }else{
        callback(null, "Parametros Invalidos!");
      }
  }
});

server.http().listen(3000);