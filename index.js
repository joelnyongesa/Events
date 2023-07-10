// const button = document.getElementById("submit");
// button.addEventListener('mouseover', function(){
//     console.log(`Hello, lads`);
// })

document.addEventListener('DOMContentLoaded', function(){
    const button = this.getElementById('submit');
    button.addEventListener('mouseover', function(){
        console.log("Hello, world");
    })
});