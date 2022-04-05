let displayState = true;
let landingElement = null;

export default function attachAnimationHandler(element){
    landingElement = element;
    
    landingElement.addEventListener('animationstart', () => {
        if(!displayState){
            landingElement.classList.remove('landingHidden');
        }
    });

    landingElement.addEventListener('animationend', () => {
        if(displayState) {
            landingElement.classList.add('landingHidden');
        }

        displayState = !displayState;
    });
}

export function triggerHideAnimation(){
    landingElement.style.animation = 'hideLanding 0.35s ease-in-out';
}

export function triggerShowAnimation(){
    landingElement.style.animation = 'showLanding 0.35s ease-in-out';
}
