//password access

const form = document.getElementById('password-form');
const content = document.getElementById('content');
const comingSoon = document.getElementById('coming-soon');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let password = document.getElementById('password').value;
    let correctPassword = ' ';

    if (password === correctPassword) {
        content.style.display = 'block';
        comingSoon.style.display = 'none';
    } else {
        alert('try again...')
    }
})


//button functionality

// const followBtn = document.querySelector('.home-link');
// const homeShopBtn = document.querySelector('.home-shop-btn')
// const followSection = document.getElementById('follow');
// const shopSection = document.getElementById('shop')

// followBtn.addEventListener('click', () => {
//     followSection.scrollIntoView({behavior: 'smooth'})  
// })

// homeShopBtn.addEventListener('click', () => {
//     shopSection.scrollIntoView({behavior: 'smooth'})
// })

//smooth scroll to focus on sections

// let currentSection;
// let scrollTimeout;

// window.addEventListener('scroll', () => {
//     clearTimeout(scrollTimeout);

//     scrollTimeout = setTimeout(() => {
//         let sections = document.getElementsByClassName('section')
//         let scrollPos = window.scrollY;
//         //check if inside sec 0 (greater than 0, smaller than 1)
//         if (scrollPos >= sections[0].offsetTop && scrollPos < sections[1].offsetTop) {
//             currentSection = sections[0];
//         //check if inside 1 (greater than 1, smaller than 2)
//             currentSection = sections[1];
//         } else if (scrollPos >= sections[1].offsetTop && scrollPos < sections[2].offsetTop) {
//         //check if inside 2 (greater than 2)
//         } else if (scrollPos >= sections[2].offsetTop) {
//             currentSection = sections[2];
//         }

//         if (currentSection) {
//             currentSection.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             })
//             console.log(currentSection)
//         }
//     }, 100);
// })

