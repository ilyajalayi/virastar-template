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

// load more...
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
     }
     // Function to lazily load content
     var loading_more = false;
     function lazyLoadContent() {
      const lazyContentElements = document.querySelector("#box-more");
      const lazyloadElements = document.querySelector("#loading-more");
      const boxposts = document.querySelector("#box-posts");
      
       if (isElementInViewport(lazyContentElements)) {
        if(loading_more){
          setTimeout(() => {
          boxposts.innerHTML += `            <div class="w-full mb-24 cursor-pointer bg-slate-300 dark:bg-2dark rounded-3xl  relative flex justify-center group transition-colors delay-100">
          <div class="w-full absolute -top-[5rem] max-sm:-top-28 max-xl:-top-28 max-lg:-top-[3rem] px-5 max-400:-top-20 max-350:-top-[4rem]">
              <div class="w-full h-60 max-xl:h-80 max-sm:h-[21rem] max-lg:h-52 overflow-hidden rounded-3xl max-400:h-[15rem] max-350:h-[14rem]">
                  <img class="w-full h-full object-cover  group-hover:scale-110 transition-transform delay-75" src="img/2.webp" alt="">
              </div>
          </div>
          <div>
              <div class="flex items-end flex-col mb-1 max-400:pt-[11.5rem] pt-[11.5rem] max-sm:pt-[15.5rem] max-xl:pt-[14.5rem] max-lg:pt-[11.5rem] p-2 dark:text-white">
                  <h2 class="z-50 mb-4 w-full flex justify-center items-center max-2xl:text-[20px] text-[22px] max-lg:text-[18px] max-md:text-[16px] font-bold max-sm:text-[22px] line-clamp-1 max-450:text-[18px] max-350:text-[15px] " >رعایت ادب نشانه احترام است</h2>                        
                       <div class="flex justify-center items-center flex-col">
                          <div class="flex flex-row w-full"><img src="img/logo.webp" class="rounded-full ring-2 ring-cyan-400 w-[3.2rem] h-[3.2rem] max-md:w-[3rem] max-md:h-[3rem] max-450:h-12 max-450:w-12" alt="">
                              <div class="flex flex-col justify-center items-start mr-3 max-450:text-[13px]">
                                  <h2>ویرگول</h2><h3>3 ماه پیش</h3>
                              </div>
                              <div class="text-white">
                                  <!-- 
                                      if follow btn display flex : follow visible
                                      if follow btn display none : follow hidden
                                      if followed btn display flex : followed visible
                                      if followed btn display none : followed hiden  
                                   -->
                                  <div class="flex items-center justify-center p-3 mr-3 bg-blue-600 hover:scale-110 transition-all delay-75 rounded-full">
                                      دنبال کردن
                                  </div>
                                  <div class="hidden items-center justify-center p-3 mr-3 bg-green-400 hover:scale-110 transition-all delay-75 rounded-full">
                                      دنبال میکنید
                                  </div>
                              </div>
                              </div>
      
                              <div class="flex flex-row justify-between w-full px-1 mt-4">
                                  <div class="flex *:mr-1">
                                      <div title="1 : تعداد نظرات" class="bg-green-400 p-1 px-3 hover:scale-110 transition-all delay-75 justify-center flex items-center  rounded-full  ">
                                         <i class="far fa-comments ml-[.05rem] " aria-hidden="true"></i>
                                         <span class="pt-[3px]">1</span>
                                      </div>
                                      <div title="تعداد پسند : 1" class="bg-red-500  p-1 px-3 hover:scale-110 transition-all delay-75 justify-center flex items-center  rounded-full  ">
                                      <i class="far fa-heart ml-[.05rem] " aria-hidden="true"></i>
                                      <span class="pt-[3px]">1</span>
                                   </div></div>
                                   <div title="مدت زمان خواندن این پست حدودا 1 دقیقه است" class="bg-gray-500 ml-1 p-1 px-3 hover:scale-110 transition-all delay-75 justify-center flex items-center  rounded-full  ">
                                      <i class="far fa-watch ml-[.05rem] " aria-hidden="true"></i>
                                      <span class="pt-[3px]">1</span>
                                   </div>
                              </div>
                       </div>
                   </div>
          </div>
      </div>`
          loading_more =!loading_more  
          lazyloadElements.classList.remove('load')
          }, 2000);
        }else{
          lazyloadElements.classList.add('load')
          
          loading_more =!loading_more
          
        }
        return loading_more
        
       }
      }
     
     // Attach the lazyLoadContent function to the scroll event
     window.addEventListener("scroll", lazyLoadContent);
     // Call the function initially to load the visible content on page load
     lazyLoadContent();