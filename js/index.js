/////////////////////// password ////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('password-form');
  const content = document.getElementById('content');
  const comingSoon = document.getElementById('coming-soon');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      let password = document.getElementById('password').value;
      let correctPassword = 'H0ld1ngbackwav3s';

      if (password === correctPassword) {
          content.style.visibility = "visible";
          comingSoon.style.visibility = "hidden";
      } else {
          alert('try again...')
      }
  })
})

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
                    "background-color": "transparent", //
                    "display": "inline-block"
                  },
                  "background-color": "transparent", //
                  "border": "solid 2px #fff", //
                  "display": "inline-block",
                  ":focus": {
                    "background-color": "transparent" //
                  },
                  "border-radius": "0px",
                  "padding-left": "100px",
                  "padding-right": "100px",
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
                "button": "ADD TO CART"
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
                    "background-color": "transparent" //
                  },
                  "background-color": "#ff0000",
                  ":focus": {
                    "background-color": "transparent" //
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
                    "background-color": "transparent" //
                  },
                  "background-color": "#ff0000",
                  ":focus": {
                    "background-color": "transparent" //
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
                    "background-color": "transparent" //
                  },
                  ":focus": {
                    "background-color": "transparent" //
                  }
                }
              }
            }
          },
    })
})


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

///////////////////////////// carousel-one //////////////////////////////

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", () => {
  //right n left arrow
  let rightArrow = document.querySelector("#right-arrow");
  let leftArrow = document.querySelector("#left-arrow");
  //list of screens in carousel
  let screenStore = document.querySelectorAll("#carousel .carousel-screen");
  let numOfScreens = screenStore.length;
  //list of all circle stores
  let circleStore = document.querySelectorAll(".circle");
  //number to target main screen
  let currentScreen = 0;
  //currently in animation or not. stops user from being able to start new animation when anim is already happening.
  let inAnim = false;
  //aniation time
  let animTime = 500; //will prob not neet this/ /////////////
  //nav btns //////////////
  let joinBtn = document.getElementById("join");
  let shopBtn = document.getElementById("shop");
  let musicBtn = document.getElementById("music");

  //sort out starting position
  sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
  //sort out circle styling on doc load
  highlightCircle(circleStore[0]);

  //user clicks on right arrow
  rightArrow.addEventListener("click", () => {
    startAnim("right");
  });

  //user clicks left arrow
  leftArrow.addEventListener("click", () => {
    startAnim("left");
  });
  ////////////
  //////////
  function startAnim(direction) {
    if(!inAnim) {
      inAnim = true;
      if(direction === "right") {
        moveRight();
        highlightCircle(circleStore[currentScreen + 1], "right");
      } else if (direction === "left") {
        moveLeft();
        highlightCircle(circleStore[currentScreen - 1], "left");
      } else {
        inAnim = false;
        return
      }
    }
  }

  //move to the right
  function moveRight() {
    //move towards next screen as usual
    if(currentScreen < numOfScreens - 1) {
      toLeft(screenStore[currentScreen]);
      comeRight(screenStore[currentScreen + 1])
      setTimeout(() => {
        inAnim = false;
        currentScreen++
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
      }, animTime);
    } else {
      //or the screen coming in is the first screen again
      toLeft(screenStore[currentScreen]);
      comeRight(screenStore[0]);
      setTimeout(() => {
        inAnim = false;
        currentScreen = 0;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
      }, animTime);
    }
  }

  //move to the left
  function moveLeft() {
    //move back to screen previously on, as usual
    if(currentScreen > 0) {
      toRight(screenStore[currentScreen]);
      comeLeft(screenStore[currentScreen - 1])
      setTimeout(() => {
        inAnim = false;
        currentScreen--;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
      }, animTime);
    } else {
      //move back to the last screen container
      toRight(screenStore[currentScreen]);
      comeLeft(screenStore[numOfScreens - 1]);
      setTimeout(() => {
        inAnim = false;
        currentScreen = numOfScreens - 1;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
      }, animTime);
    }
  }

  //animation methods
  function toLeft(screen) {
    screen.style.animation = "toLeft .5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }

  function toRight(screen) {
    screen.style.animation = "toRight .5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }

  function comeLeft(screen) {
    screen.style.animation = "comeLeft .5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }

  function comeRight(screen) {
    screen.style.animation = "comeRight .5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }

  //sort positioning. don't want images to overlap
  function sortPositioning(mainScreen, leftScreen, rightScreen){
    //if right screen is undefined. we need to repeat first screen again
    if(rightScreen === undefined) {
      rightScreen = screenStore[0];
    }
    //if left screen is undefined. we use the last screen
    if(leftScreen === undefined) {
      leftScreen = screenStore[numOfScreens - 1];
    }
    screenStore.forEach(screen => {
      if(screen === mainScreen) {
        screen.style.display = "block";
        screen.style.left = "0px";
      } else if (screen === leftScreen) {
        screen.style.display = "block";
        screen.style.left = "-100%";
      } else if (screen === rightScreen) {
        screen.style.display = "block";
        screen.style.left = "100%";
      } else {
        screen.style.display = "none"
      }
    })
  }


  //user clicks on one of the circles
  circleStore.forEach(circle => {
    circle.addEventListener("click", event => {
      if(!inAnim) {
        //convert nodelist to array to be able to use indexof method
        let circleStoreArray = Array.prototype.slice.call(circleStore);
        let circleIndex = circleStoreArray.indexOf(event.target);
        //configure circle styling
        highlightCircle(event.target)
      }
    })
  })

  function highlightCircle(circleSelect, direction) {
    if(circleSelect === undefined && direction === "right") {
      circleSelect = circleStore[0]
    } else if(circleSelect === undefined && direction === "left") {
      circleSelect = circleStore[numOfScreens - 1]
    }
    circleStore.forEach(circle => {
      if(circle === circleSelect) {
        circle.classList.add("circle-fill");
      } else {
        circle.classList.remove("circle-fill");
      }
    })
  }


  // ******all this code came from this youtube tutorial by Qixotl LFC.
  // I actually only did the tutorial up until 1:02 (it's 1:13 total length)
  //and I omitted the part to make the 'circles' clickable to then change slides.
  //can add this in for other projects but not necessary for this one.
  //
  //tutorial link :
  // https://www.youtube.com/watch?v=egdSNZfgFY4

})

//////////////////////////////////////////////////////////////////
////////////////////////// carousel b ///////////////////////////
//////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  let rightArrow = document.querySelector("#carousel-vinyl-carousel .carousel-vinyl-carousel-right-arrow");
  let leftArrow = document.querySelector("#carousel-vinyl-carousel .carousel-vinyl-carousel-left-arrow");
  let screenStore = document.querySelectorAll("#carousel-vinyl-carousel .carousel-vinyl-carousel-screen");
  let numOfScreens = screenStore.length;
  let circleStore = document.querySelectorAll(".carousel-vinyl-carousel-circle");
  let currentScreen = 0;
  let inAnim = false;
  let animTime = 500;

  sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
  highlightCircle(circleStore[0]);

  rightArrow.addEventListener("click", () => {
    startAnim("right");
  })
  leftArrow.addEventListener("click", () => {
    startAnim("left");
  })

  function startAnim(direction) {
    if(!inAnim) {
      inAnim = true;
      if(direction === "right") {
        moveRight();
        highlightCircle(circleStore[currentScreen + 1], "right")
      } else if (direction === "left") {
        moveLeft();
        highlightCircle(circleStore[currentScreen - 1], "left")
      } else {
        inAnim = false;
        return
      }
    }
  }

  function moveRight() {
    if(currentScreen < numOfScreens - 1) {
      toLeft(screenStore[currentScreen]);
      comeRight(screenStore[currentScreen + 1])
      setTimeout(() => {
        inAnim = false;
        currentScreen++;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1])
      }, animTime);
    } else {
      toLeft(screenStore[currentScreen]);
      comeRight(screenStore[0]);
      setTimeout(() => {
        inAnim = false;
        currentScreen = 0;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1])
      }, animTime);
    }
  }

  function moveLeft() {
    if(currentScreen > 0) {
      toRight(screenStore[currentScreen])
      comeLeft(screenStore[currentScreen - 1])
      setTimeout(() => {
        inAnim = false;
        currentScreen--;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1])
      }, animTime);
    } else {
      toRight(screenStore[currentScreen]);
      comeLeft(screenStore[numOfScreens - 1]);
      setTimeout(() => {
        inAnim = false;
        currentScreen = numOfScreens - 1;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1])
      }, animTime);
    }
  }

  function toLeft(screen) {
      screen.style.animation = "toLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }
  function toRight(screen) {
    screen.style.animation = "toRight 0.5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }
  function comeRight(screen) {
    screen.style.animation = "comeRight 0.5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }
  function comeLeft(screen) {
      screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
      screen.style.animation = "";
    }, animTime);
  }

  function sortPositioning(mainScreen, leftScreen, rightScreen) {
    if (rightScreen === undefined) {
      rightScreen = screenStore[0];
    }
    if (leftScreen === undefined) {
      leftScreen = screenStore[numOfScreens - 1];
    }
    screenStore.forEach(screen => {
      if(screen === mainScreen) {
        screen.style.display = "block";
        screen.style.left = "0px";
      } else if (screen === leftScreen) {
        screen.style.display = "block";
        screen.style.left = "-100%";
      } else if (screen === rightScreen) {
        screen.style.display = "block";
        screen.style.left = "100%";
      } else {
        screen.style.display = "none";
      }
    })
  }

  circleStore.forEach(circle => {
    circle.addEventListener("click", (e) => {
      if(!inAnim) {
        let circleStoreArray = Array.prototype.slice.call(circleStore);
        let circleIndex = circleStoreArray.indexOf(e.target);
        highlightCircle(e.target);
        if(circleIndex > currentScreen) {
          changeScreenCircleClick(circleIndex, "right");
        } else if (circleIndex < currentScreen) {
          changeScreenCircleClick(circleIndex, "left");
        }
      }
    })
  })

  function changeScreenCircleClick(circleIndex, direction) {
    inAnim = true;
    if(direction === "right") {
      sortPositioning(screenStore[currentScreen], screen[currentScreen - 1], screenStore[circleIndex]);
      toLeft(screenStore[currentScreen])
      comeRight(screenStore[circleIndex])
    } else if (direction === "left") {
      sortPositioning(screenStore[currentScreen], screenStore[circleIndex], screenStore[currentScreen + 1]);
      toRight(screenStore[currentScreen]);
      comeLeft(screenStore[circleIndex]);
    } else {
      inAnim = false;
      return
    }
    setTimeout(() => {
      inAnim = false;
      currentScreen = circleIndex;
      sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1])
    }, animTime);
  }

  function highlightCircle(circleSelect, direction) {
    if(circleSelect === undefined && direction === "right") {
      circleSelect = circleStore[0];
    } else if (circleSelect === undefined && direction === "left") {
      circleSelect = circleStore[numOfScreens - 1];
    }
    circleStore.forEach(circle => {
      if(circle === circleSelect) {
        circle.classList.add("carousel-vinyl-carousel-circle-fill");
      } else {
        circle.classList.remove("carousel-vinyl-carousel-circle-fill");
      }
    })
  }
})

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

////////////////////////////home btn//////////////////////////////////////

let enterBtn = document.querySelector("#enter-btn");
let carousel = document.querySelector(".carousel-container");

enterBtn.addEventListener("click", () => {
  carousel.scrollIntoView({behavior: "smooth"});
})



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////