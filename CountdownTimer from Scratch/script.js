const endDate =  "05 September 2024 04:49 PM"
document.getElementById("endDate").innerHTML = endDate;

const inputs = document.querySelectorAll('input');

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now ) / 1000;

    if(diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60 ) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
//  1 day = 24 
//  1 hr = 60 mins
//  60 mis = 3600 sec


setInterval(() => {
    clock();
}, 1000);