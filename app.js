
let headLine = document.querySelector('#HeadLine');
headLine.style.color = 'red';

headLine.addEventListener('mouseover',function() {
    headLine.style.color = 'black';
});
headLine.addEventListener('mouseout',function() {
    headLine.style.color = 'red';
});

// Button 
for(let i = 0; i <= 2; i++){
  let para = document.getElementById('demo');
  let button = document.querySelectorAll('#myBtn')[i];
  button.addEventListener('click', myFunction);
  function myFunction(){
    let text = this.innerHTML;
    para.innerHTML = text +' is clicked.';
  }
}
