// Get the current time in seconds
function getCurrentTime() {
    return new Date().getTime() / 1000;
}

// Get the start time of the animation from localStorage
function getStartTime() {
    return parseFloat(localStorage.getItem('animationStartTime')) || getCurrentTime();
}

// Set the start time of the animation to localStorage
function setStartTime() {
    localStorage.setItem('animationStartTime', getCurrentTime());
}

// Calculate the animation time based on the elapsed time
function getAnimationTime() {
    const animationDuration = 70; // Duration of the animation in seconds
    const elapsedTime = getCurrentTime() - getStartTime();
    return (elapsedTime % animationDuration) / animationDuration * 100; // Percentage
}

// Set the background animation time based on the elapsed time
function setAnimation() {
    const animationTime = getAnimationTime();
    document.documentElement.style.setProperty('--animation-time', `${animationTime}%`);
}

// Initialize animation only if the start time is not already set
function initAnimation() {
    if (!localStorage.getItem('animationStartTime')) {
        setStartTime();
    }
    setAnimation();
}

// Call initAnimation() when the page loads
window.addEventListener('load', initAnimation);


// //navigation
// function navigateTo(direction) {
//     const links = document.querySelectorAll('.content a');
//     let currentIndex = Array.from(links).findIndex(link => link.href === window.location.href);

//     if (direction === 'next' && currentIndex < links.length - 1) {
//         window.location.href = links[currentIndex + 1].href;
//     } else if (direction === 'previous' && currentIndex > 0) {
//         window.location.href = links[currentIndex - 1].href;
//     }
// }

