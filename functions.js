const rdl = require('readline');

const ask = rdl.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = {
  ask(question) {
    return new Promise(resolve => {
      ask.question(question, answer => {
        ask.close();

        resolve(answer);
      });
    });
  },

  answerIsYes(answer) {
    const yesList = [
      'sim',
      's',
      'y',
      'yes',
      'sure',
      'yap',
      'yep',
      'yas',
      'si',
    ];
    
    return yesList.contains(answer.toLowerCase().trim());
  },

  loading(message, size = 50, cursor = 0) {
    return new Promise(resolve => {
      message && console.log(message);
      
      const timer = setInterval(() => {
        cursor++;
        process.stdout.write('#')

        if (cursor >= size) {
          clearTimeout(timer);
          process.stdout.write("\x1B[?25h\n\n");

          resolve(true);
        }
      }, 100);
    });
  }
}