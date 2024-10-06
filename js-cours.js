// selecting inputs
const nameText = document.querySelector('#full-name');
const numberText = document.querySelector('#phone-number');
const scoreText = document.querySelector('#score');
const submitBTN = document.querySelector('.btn-outline');

// first function
function getnote(e){
    // getting input values
    e.preventDefault()
    const nameValue = nameText.value;
    const numberValue = numberText.value;
    const scoreValue = scoreText.value;
    addLs({name:nameValue,number:numberValue,score:scoreValue,id:Math.random()});
}

//second function
function getLocal(){
    //checking if there is anything is LS
    let revivenote;
    let lsNots = localStorage.getItem('userNote');

    if(lsNots == null){
        revivenote = [];
    }else{
        revivenote = JSON.parse(lsNots);
    }
    return revivenote;

}

//third function
function addLs(usernote){
    //pushing new data to array
    let oldNots = getLocal();
    oldNots.push(usernote);
    localStorage.setItem('userNote',JSON.stringify(oldNots));
}


// set addEvent for submit BTN
submitBTN.addEventListener('click',getnote);