const btn = document.querySelector('button');

btn.addEventListener('click',function(event){
    event.preventDefault();
    var ans = document.querySelector('input').value.split('\\');
    console.log(ans);

    // location.href = ans[ans.length-1];
});