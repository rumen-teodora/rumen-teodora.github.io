const HIDDEN = 'hidden';
const ANIMATION_CLASS = 'aos-animate';

for(let i = 2; i <= 6; i++){
  document.getElementById(i).classList.add(HIDDEN);
}

function hideParent(btn){
  const parent = btn.parentElement;
  let parentId = Number(parent.id);
  parent.classList.add(HIDDEN);
  return parentId;
}

function showElement(element){
    element.classList.remove(HIDDEN);
    element.classList.remove(ANIMATION_CLASS);
    setTimeout(()=>{
      element.classList.add(ANIMATION_CLASS);
    },400)
}

document.querySelectorAll('.button.foward').forEach(btn=> {
    btn.addEventListener('click',()=>{
      const parentId = hideParent(btn);
      const element = document.getElementById(parentId + 1);
      element.setAttribute('data-aos','fade-down');
      showElement(element);
    })
});

document.querySelectorAll('.button.back').forEach(btn=> {
  btn.addEventListener('click',()=>{
    const parentId = hideParent(btn);
    const element = document.getElementById(parentId + -1);
    element.setAttribute('data-aos','fade-up');
    showElement(element);
  })
});