const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`Hello, nice you meet you, ${answer}.`);
  rl.question("What's an activity you like doing?", (answer) => {
    console.log(`Oh ${answer}, thats nice to know.`);
    rl.question("What do you listen to while doing that?", (answer) => {
      console.log(`${answer}, ok noted.`);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        console.log(`${answer} you say, well as you remember to eat.`);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          console.log(`I also enjoy eating ${answer}.`);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            console.log(`${answer}, not a bad choice.`);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              console.log(`Ok noted: ${answer}`);

      

  





              
              rl.close();
            });
          });
        });
      });
    });
  });
});



