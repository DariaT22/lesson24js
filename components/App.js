class App {
    create() {
        this.element=document.createElement('div');
        this.element.classList.add('app');
    }

    render(){
        document.body.appendChild(this.element);
    }

    init(){
        this.create();
        const head=document.querySelector('head');

    this.render();
    }   

    constructor() { 
        this.products = []; 
      } 
     
      async fetchData() { 
        const cachedData = localStorage.getItem('products'); 
        if (cachedData) { 
          this.products = JSON.parse(cachedData); 
          return; 
        } 
     
        const response = await fetch('https://fakestoreapi.com/products'); 
        const data = await response.json(); 
        this.products = data; 
        localStorage.setItem('products', JSON.stringify(data)); 
      } 
     
      init() { 
        this.fetchData().then(() => { 
        }); 
      } 
}

class Header { 
    create() { 
      this.element = document.createElement('header'); 
      this.element.className = 'header'; 
      this.element.innerHTML = '<h1>Заголовок страницы</h1>'; 
    } 
   
    init() { 
      this.create(); 
      return this.element; 
    } 
  } 
   
  class Nav { 
    create() { 
      this.element = document.createElement('nav'); 
      this.element.className = 'nav'; 
      this.element.innerHTML = '<ul><li><a href="#">Ссылка 1</a></li><li><a href="#">Ссылка 2</a></li><li><a href="#">Ссылка 3</a></li></ul>'; 
    }
   init() { 
      this.create(); 
      return this.element; 
    } 
  } 
   
  class Main { 
    create() { 
      this.element = document.createElement('main'); 
      this.element.className = 'main'; 
      this.element.innerHTML = '<p>Content</p>'; 
    } 
   
    init() { 
      this.create(); 
      return this.element; 
    } 
  } 
   
  class Footer { 
    create() { 
      this.element = document.createElement('footer'); 
      this.element.className = 'footer'; 
      this.element.innerHTML = '<p>AAA</p>';
    }
    
  init() { 
      this.create(); 
      return this.element; 
    } 

   
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
  const header = new Header().init(); 
  export{header};
  const nav = new Nav().init();
  export{nav}; 
  const main = new Main().init();
  export{main}; 
  const footer = new Footer().init();
  export{footer};

export default new App().init();




