function debounce(func,wait){
    var timeOutHandler;
    return function(){
        var args = arguments;
        timeOutHandler && clearTimeout(timeOutHandler)
        timeOutHandler = setTimeout(()=>{
            timeOutHandler = null  
            func.apply(this,args)
        },wait);
    }
}   
function echo(){
    console.log("hi")
}   
debounce(echo,500)



function throttle(func,wait){
    var timeOutHandler;
    return function(){
        if(timeOutHandler){
            return;
        }
        var args = arguments;
        timeOutHandler  = setTimeout(()=>{
            timeOutHandler= null;
            func.apply(this,args)
        },wait);
    }
}


function test(){
    for(let i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000);
    }
}

test()


function debounce(){
    var timeOutHandler
    return function(){
        timeOutHandler && clearTimeout(timeOutHandler)
        timeOutHandler =   setTimeout(()=>{
            console.log('Api call')
        },1000)
    }
}

function throttle(){
    var timeOutHandler
    return function(){
        if(timeOutHandler){
            return
        }

        timeOutHandler = setTimeout(function(){
            console.log('Api call')
        },100)
    }

}