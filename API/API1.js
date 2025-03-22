const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    const country = prompt("Enter :"); //prompt //form //localstorge
    fetch(`https://restcountries.com/v3.1/name/${country}`).then((response)=>{
        response.json().then((response2)=>{
            // console.log(response2);
            // console.log(response2[0].flags.svg);
            // console.log(response2[1]);
            document.querySelector('img').attributes.src.value =  response2[0].flags.svg;
        },()=>{
            console.log("Error");
        });
    },()=>{
        console.log("Error");
    });
});