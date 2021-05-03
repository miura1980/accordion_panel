'use strict';

const h2 = document.querySelectorAll('.ly_wrap h2');
const p = document.querySelectorAll('.ly_wrap p');

// console.log(h2); // コンソールで確認する為
// console.log(p); // コンソールで確認する為

p.forEach((area, index) => {
  if(index === 0){
    p[index].classList.remove('not');
  } else {
    p[index].classList.add('not');
  };
  // console.log(area, index); // コンソールで確認する為
});

h2.forEach((title, index) =>{
  h2[index].addEventListener('click', () =>{
    // console.log(h2,index); // コンソールで確認する為
    p.forEach((area, index2) =>{
      if(p[index2].className === 'not' && index === index2){
        p[index2].classList.remove('not');
      } else {
        p[index2].classList.add('not');
      }
      // console.log(index, index2); // コンソールで確認する為
    });
  });
});
