let displayState = true;
let landingElement = null;

export default function attachAnimationHandler(element){
    landingElement = element;

    landingElement.addEventListener('animationstart', () => {
        if(!displayState){
            landingElement.classList.toggle('landingHidden');
        }
    });

    landingElement.addEventListener('animationend', () => {
        if(displayState) {
            landingElement.classList.toggle('landingHidden');
        }

        displayState = !displayState;
    });
}

export function hideLanding(){
    landingElement.style.animation = 'hideLanding 0.35s ease-in-out';
}

export function showLanding(){
    landingElement.style.animation = 'showLanding 0.35s ease-in-out';
}
