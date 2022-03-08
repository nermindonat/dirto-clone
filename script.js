


// const spanList = [...document.querySelector('.cd-words-wrapper')];
// const selectors = document.querySelectorAll('.cd-words-wrapper > span');
//     const list = [...selectors].map(span => parseInt(span.innerText.replace(/"/g,"")));
//     console.log(list)
//console.log(document.getElementsByClassName('.is-hidden').innerHTML=list[1].innerHTML);

// console.log(document.querySelectorAll('span').innerHTML)=list.length;



// function isHidden(list) {
//   for (var item in list) {
//     document.querySelectorAll('.cd-words-wrapper').innerHTML=list[item];
    
//       console.log(list[item]);
//     }
//   return (list.offsetParent === null)
// }


// function isVisible(domElement) {
//   return new Promise(resolve => {
//     const o = new IntersectionObserver(([entry]) => {
//       resolve(entry.intersectionRatio === 1);
//       o.disconnect();
//     });
//     o.observe(domElement);
//   });
// }

// const visible = await isVisible(document.querySelector('.cd-words-wrapper'));
// console.log(visible);

//const list=["Hotels","Restaurants","Shops","Salons","Apartments","Travels"];

// function toggle_visibility(){
//   const list=["Hotels","Restaurants","Shops","Salons","Apartments","Travels"];
//   document.getElementsByClassName('is-hidden');
//   for (var i=0; i<list.length; ++i){
//      var s = list[i].style;
//      s.display = s.display==='none' ? 'block' : 'none';
//   };
// }
// console.log(toggle_visibility('is-hidden'));


// function toggleText(){
//   var elms = document.getElementsByClassName("is-hidden");

//   Array.from(elms).forEach((x) => {
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }


//   })
// }

// console.log(toggleText('is-hidden'));

// var list = document.getElementsByClassName("is-hidden");
// for (var i = 0; i < list.length; i++) {
//  list[i].onclick = function() {
//     document.getElementById('is-hidden').classList.toggle("myactive");
//   }
// }

const list=["Hotels","Restaurants","Shops","Salons","Apartments","Travels"];
var x=document.getElementById('demo').innerHTML=list;
for (let i = 0; i < list.length; i++) {
  list[1].style.visibility="hidden"
  
  
  
}
// function  my_fonksiyon(){

//   list.forEach(item => {
//     var yazi = document.getElementById('deneme');
//     yazi = yazi +item;
//     document.getElementById('deneme').innerhtml = yazi;


    
//   });
// }