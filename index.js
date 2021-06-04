#!/usr/bin/env node

const fn = require('./functions.js');

(async () => {
  await fn.loading('Interceptando satélites militares');
  await fn.loading('Desencriptando informações interceptadas');
  await fn.loading('Quebrando senhas super seguras');

  fn.ask('Hackear o governo e roubar informações? (S/n): ')
    .then(async must => {
      if (must) {
        await fn.loading('\nHackeando o governo, aguarde');

        console.log('O GOVERNO FOI HACKEADO. VOCÊ TEM 1 HORA PARA FUGIR DO PAÍS.\n')
      }
    })
    .catch(err => {
      console.error(`Um erro ocorreu, não foi possível hackear o governo: ${err}`)
    });
})();