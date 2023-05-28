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
      domain: 'f5f197-2.myshopify.com',
      storefrontAccessToken: 'd795cd7842a6f2b4bb5c704109127f47',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8396742361403',
        node: document.getElementById('product-component-1685254761257'),
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
        ":hover": {
          "background-color": "#e60000"
        },
        "background-color": "#ff0000",
        ":focus": {
          "background-color": "#e60000"
        }
      },
      "description": {
        "font-size": "16px",
        "color": "#ff0000"
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
        ":hover": {
          "background-color": "#e60000"
        },
        "background-color": "#ff0000",
        ":focus": {
          "background-color": "#e60000"
        }
      },
      "description": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "14px",
        "color": "#4c4c4c"
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
        ":hover": {
          "background-color": "#e60000"
        },
        "background-color": "#ff0000",
        ":focus": {
          "background-color": "#e60000"
        }
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
          "background-color": "#e60000"
        },
        ":focus": {
          "background-color": "#e60000"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/