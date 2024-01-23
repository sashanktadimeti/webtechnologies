const body=document.body
const radiibutton=document.querySelectorAll('input[type="radio"]');
const radbutton=document.querySelector('input[type="color"]');
for(let i=0;i<radiibutton.length;i++)
{
    radiibutton[i].addEventListener('click',function(e){
        body.style.backgroundColor=e.target.value;
    })
}
radbutton.addEventListener('input',function(e){
    const color1=e.target.value;
    body.style.backgroundColor=color1;
});