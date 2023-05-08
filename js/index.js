const followBtn = document.querySelector('.home-link');
const followSection = document.getElementById('follow');
const body = document.querySelector('body')

followBtn.addEventListener('click', () => {
    followSection.scrollIntoView({behavior: 'smooth'})  
})