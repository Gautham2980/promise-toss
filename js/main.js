var a=prompt("enter head or tail")

const result=new Promise((resolve,reject)=>{
    // let headtoss=false;

    if(a=="head"){
        resolve()
    }

    else if(a=="tail"){
        reject()
    }

    else{
       console.log("better luck next time");
    }
})

result.then(success).catch(failure);

function success(){
    document.write("You Won the Head")
}

function failure(){
    document.write("You Won the Tail");
}