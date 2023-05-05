const followBtn = document.querySelector('.home-link');
const followSection = document.getElementById('follow');
const x = document.getElementById('x');

console.log(followSection)

followBtn.addEventListener('click', () => {
    // followSection.setAttribute('visibility', 'visible')
    followSection.style.visibility = 'visible';
    console.log('clicked ayyyy')
    console.log(followSection)
})

x.addEventListener('click', () => {
    followSection.style.visibility = 'hidden';
})