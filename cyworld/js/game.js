function onClickWord(){
    let givenField = document.getElementById("word");
    let resultField = document.getElementById("result");
    let given =givenField.innerText;
    let lastWord = given[given.length-1];

    let inputWord = document.getElementById("my__word").value;

    if(inputWord.length == 0 ){

        resultField.innerText="Empty";

    }else if(lastWord === inputWord[0]){

        givenField.innerText = inputWord;
        resultField.innerText="결과!";
    }
    else{

        resultField.innerText = "땡!";
    }

}


function createRandomLotto(){
    for(let i =0 ; i < 6 ;i++){
        let ran = Math.floor(Math.random()*100); 
        document.getElementById("num"+(i+1)).innerText = ran;
    }
}