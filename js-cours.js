const text = document.querySelector('.form');
text.addEventListener('submit',click);
function click(e){
    e.preventDefault();
    const usertext = document.querySelector('#text').value;
    addtols(usertext);
    
}


function getlocal(){
    let revievenote;

    let lsNote = localStorage.getItem('note');

    if(lsNote == null){
        revievenote = [];
    }else{
        revievenote = JSON.parse(lsNote);
    }
    return revievenote;
}

function addtols(usernote){
    let oldnote = getlocal();
    oldnote.push(usernote);
    localStorage.setItem('note',JSON.stringify(oldnote));
}

