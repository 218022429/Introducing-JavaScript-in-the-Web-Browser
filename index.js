console.log(document)

const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

myMessage.innerText = 'This is a message in the DOM!'

setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 )

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
   alert("button clicked!")
});


theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});

const clearMessage = document.querySelector('.clearMessage');
clearMessage.addEventListener('click', function() {
  myMessage.innerText = ''
});

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function() {
  setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
  }, 3000 )
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
})

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
const inp = document.querySelector(".InputValue");
const add = document.querySelector(".addButton");

add.addEventListener('click', function(){
   const fruit = inp.value
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
   

}) 