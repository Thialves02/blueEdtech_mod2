const elementoImg = document.querySelector('#humor_home')
let happyBtn = document.querySelector('.happy')
let sadBtn = document.querySelector('.sad')
let angryBtn = document.querySelector('.angry')
let rageBtn = document.querySelector('.rage')


happyBtn.addEventListener('click',()=>{
    elementoImg.src = 'img/happy.jpg'
    document.querySelector('body').style.backgroundColor = '#533E14';
})

sadBtn.addEventListener('click',()=>{
    elementoImg.src = './img/sad.jpg'
    document.querySelector('body').style.backgroundColor = '#7845C7';
})

angryBtn.addEventListener('click',()=>{
    elementoImg.src = './img/angry.jpg'
    document.querySelector('body').style.backgroundColor = '#B8331F';
})

rageBtn.addEventListener('click',()=>{
    elementoImg.src = './img/rage.png'
    document.querySelector('body').style.backgroundColor = '#db0f00'
})

happyBtn.addEventListener("dblclick", ()=>{
    elementoImg.src = 'img/humor_home.jpg'
    document.querySelector('body').style.backgroundColor = '#000103'
});

sadBtn.addEventListener("dblclick", ()=>{
    elementoImg.src = 'img/humor_home.jpg'
    document.querySelector('body').style.backgroundColor = '#000103'
});

angryBtn.addEventListener("dblclick", ()=>{
    elementoImg.src = 'img/humor_home.jpg'
    document.querySelector('body').style.backgroundColor = '#000103'
});

rageBtn.addEventListener("dblclick", ()=>{
    elementoImg.src = 'img/humor_home.jpg'
    document.querySelector('body').style.backgroundColor = '#000103'
});
