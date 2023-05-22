/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'b39186.myshopify.com',
        storefrontAccessToken: '57dd029f4e9b83a7d233e5ade2371053',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '8461368623409',
          node: document.getElementById('product-component-1684738075405'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
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
          "color": "#fdfdfd",
          ":hover": {
            "color": "#fdfdfd",
            "background-color": "#e00000"
          },
          "background-color": "#f90000",
          ":focus": {
            "background-color": "#e00000"
          },
          "border-radius": "6px"
        }
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
          "color": "#fdfdfd",
          ":hover": {
            "color": "#fdfdfd",
            "background-color": "#e00000"
          },
          "background-color": "#f90000",
          ":focus": {
            "background-color": "#e00000"
          },
          "border-radius": "6px"
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          "color": "#fdfdfd",
          ":hover": {
            "color": "#fdfdfd",
            "background-color": "#e00000"
          },
          "background-color": "#f90000",
          ":focus": {
            "background-color": "#e00000"
          },
          "border-radius": "6px"
        }
      },
      "text": {
        "total": "Subtotal",
        "button": "Checkout"
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "background-color": "#f90000",
          ":hover": {
            "background-color": "#e00000"
          },
          ":focus": {
            "background-color": "#e00000"
          }
        },
        "count": {
          "color": "#fdfdfd",
          ":hover": {
            "color": "#fdfdfd"
          }
        },
        "iconPath": {
          "fill": "#fdfdfd"
        }
      }
    }
  },
        });
      });
    }
  })();
  /*]]>*/