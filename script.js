
// const words=["Hotels","Restaurants","Shops","Salons","Apartments","Travels","Business","Fitness"];
// const element=document.getElementById('word');
// setInterval(() => {
//   let word_index=Math.floor(Math.random() * words.length);
//   element.innerHTML=`${words[word_index]}</p>`
// }, 1000);

const words=["Hotels", "Restauransts","Shops","Salons","Apartments","Travels","Business","Fitness"];

const element=document.getElementById('word');

let index=0;

setInterval(() => {
  element.innerHTML=`${words[index]}`
  index++;
  if(index == words.length){
    index = 0;
  }
},1000);

