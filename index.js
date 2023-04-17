"use strict"

// const link = document.createElement('link'); 
// link.rel = 'stylesheet'; 
// link.href = 'styles.css'; 
// document.head.appendChild(link);



function init() { 
    const head = document.querySelector('head'); 
   
    const metaCharset = document.createElement('meta'); 
    metaCharset.setAttribute('charset', 'UTF-8'); 
    head.appendChild(metaCharset); 
   
    const title = document.createElement('title'); 
    title.textContent = 'Document'; 
    head.appendChild(title); 

    const link = document.createElement('link'); 
    link.rel = 'stylesheet'; 
    link.href = 'styles/style.css'; 
    head.appendChild(link); 
  }

  import { Product } from './components/Product.js'; 
  import { App } from './components/App.js'; 
   
  const app = new App().init(); 
   
  App.then(() => { 
    const productList = document.getElementById('product-list'); 
    app.products.forEach(productData => { 
      const product = new Product(productData).init(); 
      productList.appendChild(product); 
    }); 
  });

  import App from './components/App.js';
  
  
  

