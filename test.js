
function countdown(number, message) {
  for (let i = number; i >= 0; i--) {
    let seconds = i;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let countdownString = `${minutes}'${seconds}`;
    if (seconds < 10) {
      countdownString=`${seconds}...`
    }
    console.log(countdownString);
    if (i === 0) {
      console.log(`${message.toUpperCase()}!`);
    }
  }
}


let number_s=""
let string_s=""
for(let i=0;i<process.argv.length;i++){
  number_s=process.argv[2]
  string_s=process.argv[3]
  

}
let number=Number(number_s)


countdown(number,string_s)











