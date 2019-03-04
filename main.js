// function to check str, and count how many vowels are in it with indexOf
function getCount(str) {
    var vowelsCount = 0;
    const vowelList = 'aeiouAEIOU';
    
    for(let i = 0; i<str.length; i++){
      if(vowelList.indexOf(str[i]) !== -1){
        vowelsCount += 1;
      };
    };
    
    return vowelsCount;
  };


function print(message) {
    const outputDiv= document.getElementById('testId');
    outputDiv.innerHTML= message;
  };



while(true){
    const userStr = prompt('enter a word, or sentence to find how many vowels are in it type quit to exit out of this window');
    let result = getCount(userStr);
    
    
    if(userStr.toLowerCase()==='quit'){
        break;
    }; 
    
    if(userStr !== null){
       print(`There are  ${result} vowels in ${userStr}`);
       break;
    };
};
