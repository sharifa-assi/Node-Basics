
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
 function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

var list =['a','b','c']

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {

  if (text === 'quit\n' || text ==='exit\n') {
    quit();
  }
  else if(text === 'hello\n'  || text.startsWith("hello ") || text.startsWith("hello\t") ){
    hello(text);
  }

  else if (text === 'help\n'){
    help();
  }
  else if(text.startsWith("list")){
    tasks(list);
  }
  else{
    unknownCommand(text);
  }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

/**
 * prints "all the possible help commands"
 * This function is supposed to list all possible help commands
 *
 * @param  {string} data typed by the user
 * @returns {void}
 */

function help(){
  console.log('press h for...')
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  
  console.log('hello!');
  
}

function hello(text){
  text = text.replace("\n", "");
  text = text.trim(" ");
  console.log(text+'!');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

function help(){
  console.log('How I can help you?')
}


/**
 * show tasks list
 *
 * @returns {void}
 */
 function tasks(list){
  for(var i = 0; i < list.length; i++){
    console.log(i + 1 + ") " + list[i]);
  }
}


// The following line starts the application
startApp("Sharifa")