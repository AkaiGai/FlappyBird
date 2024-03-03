const myName= 'Prathamesh';
let show = true;
let discount = 8 * 100; 
let finalPrice = 18000 - discount;

console.log(finalPrice);

function Alert()
{

  alert('You have clicked on the alert button!');

}

function displayName()
{
  show = !show;
  if(show)
  document.querySelector('.label').innerText = finalPrice;

  else{
    document.querySelector('.label').innerText = '';
  }
}

function evaluation()
{
  
  const input = document.querySelector('#input').value;

  document.querySelector('#output').value = eval(input);
  
}