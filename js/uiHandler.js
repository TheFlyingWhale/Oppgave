// let landingState = true;

// export const toggleLanding = () => {
//     const landing = document.getElementById('landing');

//     if(landingState) {
//         console.log('hide landing');
        
//         landingState = !landingState;
//     } else {
//         console.log('show landing');

//         landingState = !landingState;
//     }

// }

// export function hideLanding(){
//     const landing = document.getElementById('landing');

//     // landing.addEventListener('animationstart', hideAnimationStart, { once: true });
//     // landing.addEventListener('animationend', hideAnimationEnd, { once: true });

//     landing.addEventListener('animationstart', () => {
//         console.log('animation started');
//     }, { once: true });

//     landing.addEventListener('animationend', () => {
//         console.log('animation ended');
//         landing.classList.add('landingHidden');
//     }, { once: true });

//     landing.style.animation = "hideLanding 2s";
// }

// function hideAnimationStart(){
//     console.log('hideLanding started');
// }

// function hideAnimationEnd(){
//     console.log('hideLanding ended');

//     const landing = document.getElementById('landing');
//     landing.classList.add('landingHidden');

//     // landing.removeEventListener("animationstart", hideAnimationStart);
//     // landing.removeEventListener('animationend', hideAnimationEnd);
// }

// export function showLanding(){
//     const landing = document.getElementById('landing');

//     landing.style.WebkitAnimation = 'showLanding 2s';
//     landing.style.animation = 'showLanding 2s';

//     landing.addEventListener("animationstart", showAnimationStart);
//     landing.addEventListener("animationend", showAnimationEnd);
// }

// function showAnimationStart(){
//     console.log('showLanding started');

//     const landing = document.getElementById('landing');
//     landing.classList.remove('landingHidden');
// }

// function showAnimationEnd(){
//     console.log('showLanding ended');

//     const landing = document.getElementById('landing');
//     landing.removeEventListener("animationstart", showAnimationStart);
//     landing.removeEventListener("animationend", showAnimationEnd);
// }