
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
  else if(text.startsWith("add ")){
    add(text);
}

else if(text.startsWith("remove")){
  remove(text);
}

else if(text.replace === b){
  edit(b);
}
else if(text.startsWith("check")){
  check(text);
}
else if(text.startsWith("uncheck")){
  uncheck(text);
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
 * Says hello
 *
 * @returns {void}
 */

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
 * add task
 *
 * @returns {void}
 */
 function add(text){
  text = text.trim();
  list.push(text.substring(4).trim());
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


 
/**
 * remove from the list
 *
 * @returns {void}
 */
 function remove(text){
  text = text.trim();
  if(text.length == 6){
    list.pop();
  }
  else if(text.substring(8) >=list.length){
    console.log("the number does not exist!");
  }
  else{
  list.splice(text.substring(7),1);
}
} 




/**
 * edit
 *
 * @returns {void}
 */
 function edit(b){
  console.log(b);
  text3 = text.replace(b , text3)
}
 
/**
 * marked as done
 *
 * @returns {void}
 */
 function check(text){
  text = text.split(" ");
  list[text[1]-1][0] = '✓';
}

/**
 * unmarked
 *
 * @returns {void}
 */
function uncheck(text){
  text = text.split(" ");
  list[text[1]-1][0] = '';
}


// The following line starts the application
startApp("Sharifa")