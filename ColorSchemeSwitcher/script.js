const button = document.querySelectorAll(".button");
const body = document.querySelector('body');

button.forEach(function(button){
    //console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        // let color = e.target.id;
        // switch(color){
        //     case 'black':
        //         body.style.backgroundColor = e.target.id;
        //         body.style.color = 'white';
        //         break;
        //     case 'white':
        //         body.style.backgroundColor = e.target.id;
        //         body.style.color = 'black';
        //         break;
        //         case 'blue':
        //         body.style.backgroundColor = e.target.id;
        //         body.style.color = 'black';
        //         break;
        //         case 'yellow':
        //         body.style.backgroundColor = e.target.id;
        //         body.style.color = 'black';
        //         break;
        // }
       if(e.target.id === 'black'){
        body.style.backgroundColor = e.target.id;
        body.style.color = 'white';
       }
       if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
        body.style.color = 'black';
       }
       if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
        body.style.color = 'black';
       }
       if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
        body.style.color = 'black';
       }
    })
});