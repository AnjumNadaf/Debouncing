let counter = 0;
const getData = () =>{
    debugger;
    
    alert(counter++);
}

let count = 0;
const getData1 = () => {
    debugger;
    console.log(count++);
    alert(count++);
}

const debounce = function(fn,delay){
    debugger;
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){ getData1.apply(context,arguments); }, delay);
       
    }
};

const betterFunction = debounce(getData1,300);










// function betterFunction(){
//    debugger;
//     alert("Sucess");
// }