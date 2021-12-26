require ('colors');

const showMenu = () => {
  return new Promise (resolve => {
    console.clear;

    console.log ('\n======================='.green);
    console.log ('   Choose an option    '.green);
    console.log ('=======================\n'.green);

    console.log (`${'1.'.green} Add task`);
    console.log (`${'2.'.green} List tasks`);
    console.log (`${'3.'.green} List completed tasks`);
    console.log (`${'4.'.green} List to-dos`);
    console.log (`${'5.'.green} Edit tasks`);
    console.log (`${'6.'.green} Delete task`);
    console.log (`${'0.'.green} Exit\n`);

    const readline = require ('readline').createInterface ({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question ('Choose one option: ', opt => {
      readline.close ();
      resolve (opt);
    });
  });
};

const pause = () => {
  return new Promise (resolve => {
    const readline = require ('readline').createInterface ({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question (`\nPress ${'ENTER'.green} to continue\n`, opt => {
      readline.close ();
      resolve ();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
