/////////////////////// buy button ////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    var client = ShopifyBuy.buildClient({
        domain: "f5f197-2.myshopify.com",
        storefrontAccessToken: "e2860e86b9272f1dc24f2784ea43eb62",
    })

    var ui = ShopifyBuy.UI.init(client);

    ui.createComponent('product', {
        id: "8396742361403",
        node: document.getElementById("vinyl-product"),
        options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#52057B", //
                    "display": "inline-block"
                  },
                  "background-color": "#52057B", //
                  "border": "solid 1px #fff", //
                  "display": "inline-block",
                  ":focus": {
                    "background-color": "#52057B" //
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px"
                },
                "description": {
                  "font-size": "10px",
                  "color": "#ff0000"
                }
              },
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#52057B" //
                  },
                  "background-color": "#ff0000",
                  ":focus": {
                    "background-color": "#52057B" //
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px"
                },
                "description": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "10px",
                  "color": "#4c4c4c"
                }
              },
              "text": {
                "button": "Add to cart",
                "font-size": "10px"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  ":hover": {
                    "background-color": "#52057B" //
                  },
                  "background-color": "#ff0000",
                  ":focus": {
                    "background-color": "#52057B" //
                  },
                  "border-radius": "0px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "popup": false
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#ff0000",
                  ":hover": {
                    "background-color": "#52057B" //
                  },
                  ":focus": {
                    "background-color": "#52057B" //
                  }
                }
              }
            }
          },
    })
})

//////////////////////////////////////////////////////////////////

//password access

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('password-form');
//     const content = document.getElementById('content');
//     const comingSoon = document.getElementById('coming-soon');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let password = document.getElementById('password').value;
//         let correctPassword = ' ';

//         if (password === correctPassword) {
//             content.style.display = 'block';
//             comingSoon.style.display = 'none';
//         } else {
//             alert('try again...')
//         }
//     })
// })




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

// smooth scroll to focus on sections

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