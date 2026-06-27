const navDialog = document.getElementById("nav-dialog");

function handleMenu(){
    navDialog.classList.toggle("hidden");
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed){

    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting; 
        console.log(isIntersecting)
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        
        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }else{
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`
    }
}

const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.8);



const dtElements = document.querySelectorAll("dt");

dtElements.forEach((element) => {
    element.addEventListener("click", () => {

        const ddID = element.getAttribute("aria-controls");
        const ddElement = document.getElementById(ddID);
        const icon = element.querySelector("i");

        ddElement.classList.toggle("hidden");
        icon.classList.toggle("-rotate-180");
    });
});



// Step 3 right side animation
const progress = document.getElementById("progress");
const installText = document.getElementById("installText");

let width = 0;

function animateInstall(){

    width = 0;
    installText.textContent = "Installing...";
    progress.style.width = "0%";

    const timer = setInterval(()=>{

        width += 2;

        progress.style.width = width + "%";

        if(width >= 100){

            clearInterval(timer);

            installText.textContent = "Installed!";

            setTimeout(()=>{
                animateInstall();
            },1500);

        }

    },35);

}

animateInstall();


// Extra

// bg-gradient-to-br
//                             from-pink-300
//                             via-yellow-300
//                             to-purple-900



// <img src="https://cdn.pixabay.com/photo/2022/06/29/19/07/colored-7292420_1280.jpg" alt=""></img>


// bg-[#f8f8f8] border border-gray-500 bg-gradient-to-b from-purple-500 via-yellow-300 to-transparent

// w-7 h-7 rounded bg-gray-400 text-white flex items-center justify-center text-sm font-semibold --> y combinator logo
