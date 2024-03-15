// meno btn
var nmb = false;
document.getElementById('nav-mob-btn').onclick = () => {
  
 if (nmb) {
   
   document.querySelector('#nav-mob-btn').classList.replace('fixed' ,'absolute') 
   document.querySelector('#nav-mob-btn').classList.remove('mr-[-18px]')  
   document.querySelector('#nav-panel').classList.replace('!-right-0','!-right-full') 
   document.querySelector('.s1').classList.remove('o1');
   document.querySelector('.s2').classList.remove('o2');
   document.querySelector('.s3').classList.remove('o3');
   nmb = false;

 }else{
  document.querySelector('#nav-mob-btn').classList.replace('absolute','fixed')  

    document.querySelector('#nav-mob-btn').classList.add('mr-[-18px]')   
document.querySelector('#nav-panel').classList.replace('!-right-full','!-right-0') 

    document.querySelector('.s1').classList.add('o1');
    document.querySelector('.s2').classList.add('o2');
    document.querySelector('.s3').classList.add('o3');
    nmb = true;
 }
}

// dark mode switch big display
const sw = document.getElementById('sw');
isdark = false;
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
isdark = true;
isdarkm = isdark;

} else {
document.documentElement.classList.remove('dark');
isdark = false;
isdarkm = isdark;
};
sw.addEventListener('click',()=>{
    if(isdark){
        document.documentElement.classList.remove('dark')

    }else{
        document.documentElement.classList.add('dark')

    }            isdark = !isdark
})


// dark mode switch mobile display 
const swm = document.getElementById('swm');
isdarkm = false;
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
isdarkm = true;
isdark = isdarkm;
} else {
document.documentElement.classList.remove('dark');
isdarkm = false;
isdark = isdarkm;

};
swm.addEventListener('click',()=>{
    if(isdarkm){
        document.documentElement.classList.remove('dark')

    }else{
        document.documentElement.classList.add('dark')

    }            isdarkm = !isdarkm
})


var multe = false;
function mult (e) {

        if(multe){
          e.parentNode.classList.replace('mult','close')
          
        }else{
          e.parentNode.classList.replace('close','mult')
        }

multe = !multe;
    
}

// init slider
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          if (time / 1000 < 0) {
            progressContent.textContent = "0s";
          }
        }
      }
    });

