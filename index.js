#!/usr/bin/env node

const fn = require('./functions.js');

(async () => {
  await fn.loading('Interceptando satélites militares');
  await fn.loading('Desencriptando informações interceptadas');
  await fn.loading('Quebrando senhas super seguras');

  const answer = await fn.ask('Hackear o governo e roubar informações? (S/n): ');
  
  if (fn.answerIsYes(answer)) {
    await fn.loading('\nHackeando o governo, aguarde');
    console.log('O GOVERNO FOI HACKEADO. VOCÊ TEM 1 HORA PARA FUGIR DO PAÍS.\n')
  }
})();