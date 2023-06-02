$( document ).ready(function() {
    const wrapper = document.querySelector(".sliderWrapper");
    const menuItems = document.querySelectorAll(".menuItem");
    
    const products = [
      {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
          {
            code: "black",
            img: "/assets/home/air-1dbd893365c00e3ded66bafb46e11dde72ad03a191fd38fc0ad37c9d97076344.png",
          },
          {
            code: "darkblue",
            img: "/assets/home/air2-be5e096922d70e37415762f6e0dd78e8c244c653320db2d482eb3143a98b54f8.png" ,
          },
        ],
      },
      {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "/assets/home/jordan-cd99176633398380de33c4c8dbb10eba3ca79ca1839b92dd8714c8fa0b4c0031.png",
          },
          {
            code: "green",
            img: "/assets/home/jordan2-6e5adc2e7daf85975865c6ac8d7cd23ca8470ed995c260a432b59b8af2323b8e.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img:  "/assets/home/blazer-c077e44941f014861d362384d76ec2bd0c7f98de3deaec89190458b72fe0faa4.png",
          },
          {
            code: "green",
            img: "/assets/home/blazer2-81fd8095fa7fba391d762680bbc6b533459c309b2cc53c238d897df95c3c3512.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "/assets/home/crater-27466448417ccd90e0bcfeada3ca2777b1c9bcf4e08be99573c1f828b91d1903.png",
          },
          {
            code: "lightgray",
            img: "/assets/home/crater2-e21b6b95741af52bdcbbf3601a81a4c3b9b66d36f690935cb1807fdb97dc627d.png" ,
          },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img:  "/assets/home/hippie-f5e760bede5817644f57428a13bbf412a1846f71fa00f9ece4455a6fc02e08f2.png",
          },
          {
            code: "black",
            img: "/assets/home/hippie2-c6f8f8b2b266b4c2d3d7e2f20318150727c5da53587b0dc6081af3be2896d38a.png",
          },
        ],
      },
    ];
    
    let choosenProduct = products[0];
    
    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");
    
    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
        //change the choosen product
        choosenProduct = products[index];
    
        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
    
        //assing new colors
        currentProductColors.forEach((color, index) => {
          color.style.backgroundColor = choosenProduct.colors[index].code;
        });
      });
    });
    
    currentProductColors.forEach((color, index) => {
      color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
      });
    });
    
    currentProductSizes.forEach((size, index) => {
      size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
          size.style.backgroundColor = "white";
          size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
      });
    });
    
    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");
    
    $(productButton).on("click", () => {
      payment.style.display = "flex";
    });
    
    $(close).on("click", () => {
      payment.style.display = "none";
    });
    
});