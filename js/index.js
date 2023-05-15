const followBtn = document.querySelector('.home-link');
const followSection = document.getElementById('follow');
const body = document.querySelector('body')

followBtn.addEventListener('click', () => {
    followSection.scrollIntoView({behavior: 'smooth'})  
})

const p = new Promise((res, rej) => {
    let a = 2 + 2;
    if (a == 4) {
        res('yay')
    } else {
        rej('boo')
    }
})

console.log(p.then())