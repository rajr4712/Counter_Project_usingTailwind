const countValue = document.getElementById('counter');    //value 0 ko pick krne k liye html files se through Id we can use this code, we can use Query selector also

function increment(){
    // get the vlue from UI
    let value = parseInt(countValue.innerText);  //innerText ka use kr id k id k under store 0 value ko pick kiya
    //Update the value                        //parseInt: value pick as a string hoti they convert into interger we used this
    value = value + 1;                        //click par value me 1 add hoga 
    //set the value onto UI
    countValue.innerText = value;            // add hone k baad count value variable k inner text me store kara diye
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};