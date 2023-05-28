const followBtn = document.querySelector('.home-link');
const homeShopBtn = document.querySelector('.home-shop-btn')
const followSection = document.getElementById('follow');
const shopSection = document.getElementById('shop')
const body = document.querySelector('body')

//button functionality

followBtn.addEventListener('click', () => {
    followSection.scrollIntoView({behavior: 'smooth'})  
})

homeShopBtn.addEventListener('click', () => {
    shopSection.scrollIntoView({behavior: 'smooth'})
})

//smooth scroll to focus on sections


// window.addEventListener('scroll', () => {
//     let pageTop = window.scrollY;
//     let sections = document.getElementsByClassName('section')
//     let currentSection;

//     for(let i = 0; i < sections.length; i++) {
//         let section = sections[i];
//         let half = section.offsetHeight / 2;
//         if (pageTop >= section.offsetTop - half && pageTop <= section.offsetTop + half) {
//             currentSection = section;
//             console.log(currentSection)
//         }
//     }

//     if (currentSection) {
//         currentSection.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     }
   

// })
