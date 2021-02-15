'use strict';

//const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;

function getRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
function Cookie(location,minCust,maxCust,avgSale,){
  this.location= location;
  this.minCust= minCust;
  this.maxCust= maxCust;
  this.avgSale= avgSale;
  this.totalDailyCookies = 0;
  this.cookiesPerHour = [];
  this.hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;
  
  }
  Cookie.prototype.calcCookiesPerHour= function (){
    for (let i = 0; i < hours.length; i++) {
      let cookiePerHour = Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgSale);
      this.totalDailyCookies +=cookiePerHour ;
      console.log(cookiePerHour);
      console.log(this.cookiesPerHour);
      this.cookiesPerHour.push(cookiePerHour);
    };
    Cookie.prototype.render= function () {
      this.calcCookiesPerHour();
      const container = document.getElementById('shops');
      console.log(container);
      let articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2')
      articleEl.appendChild(h2El);
      h2El.textContent = this.location ;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < hours.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.cookiesPerHour[i];
        console.log(this.cookiesPerHour[i]);
        
      };
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `total ${this.totalDailyCookies} cookies`;
    }
    
    
  }

const seattle = new Cookie('seattle',23,65,6.3);
const tokyo = new Cookie('tokyo',3,24,1.2);
const dubai = new Cookie('dubai',11,38,3.7);
const paris = new Cookie('paris',20,38,2.3);
const lima = new Cookie('lima',2,16,4.6);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();





/*
const seattle = {
   location:  'seattle',
   minCust:  23,
   maxCust: 65,
   cookiesPerHour: [],
   avgSale: 6.3,
   totalDailyCookies: 0,  
   
   calcCookiesPerHour: function (){
     for (let i = 0; i < hours.length; i++) {
       let cookiePerHour = Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgSale);
       this.totalDailyCookies +=cookiePerHour ;
       console.log(cookiePerHour);
       console.log(this.cookiesPerHour);
       this.cookiesPerHour.push(cookiePerHour);
       
      }
      
    },
    
    
    render: function () {
      this.calcCookiesPerHour();
      const container = document.getElementById('shops');
      console.log(container);
      let articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2')
      articleEl.appendChild(h2El);
      h2El.textContent = this.location ;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < hours.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.cookiesPerHour[i];
        console.log(this.cookiesPerHour[i]);
        
      };
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `total ${this.totalDailyCookies} cookies`;
    },
    
  };
  
  seattle.render();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const tokyo = {
    location:  'tokyo',
    minCust:  3,
    maxCust: 24,
    cookiesPerHour: [],
    avgSale: 1.2,
    totalDailyCookies: 0,  
    
    calcCookiesPerHour: function (){
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour = Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgSale);
        this.totalDailyCookies +=cookiePerHour ;
        console.log(cookiePerHour);
        console.log(this.cookiesPerHour);
        this.cookiesPerHour.push(cookiePerHour);
        
      }
      
    },
    
    
    render: function () {
      this.calcCookiesPerHour();
      const container = document.getElementById('shops');
      console.log(container);
      let articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2')
      articleEl.appendChild(h2El);
      h2El.textContent = this.location ;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < hours.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.cookiesPerHour[i];
        console.log(this.cookiesPerHour[i]);
        
      };
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `total ${this.totalDailyCookies} cookies`;
    },
    
  };
  
  tokyo.render();
  
  
  const dubai = {
    location:  'dubai',
    minCust:  11,
    maxCust: 38,
    cookiesPerHour: [],
    avgSale: 3.7,
    totalDailyCookies: 0,  
    
    calcCookiesPerHour: function (){
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour = Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgSale);
        this.totalDailyCookies +=cookiePerHour ;
        console.log(cookiePerHour);
        console.log(this.cookiesPerHour);
        this.cookiesPerHour.push(cookiePerHour);
        
      }
      
    },
    
    
    render: function () {
      this.calcCookiesPerHour();
      const container = document.getElementById('shops');
      console.log(container);
      let articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2')
      articleEl.appendChild(h2El);
      h2El.textContent = this.location ;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < hours.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.cookiesPerHour[i];
        console.log(this.cookiesPerHour[i]);
        
      };
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `total ${this.totalDailyCookies} cookies`;
    },
    
  };
  
  dubai.render();
  
  
  
  
  
  
  const paris = {
    location:  'paris',
    minCust: 20,
    maxCust: 38,
    cookiesPerHour: [],
    avgSale: 2.3,
    totalDailyCookies: 0,  
    
    calcCookiesPerHour: function (){
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour = Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgSale);
        this.totalDailyCookies +=cookiePerHour ;
        console.log(cookiePerHour);
        console.log(this.cookiesPerHour);
        this.cookiesPerHour.push(cookiePerHour);
        
      }
      
    },
    
    
    render: function () {
      this.calcCookiesPerHour();
      const container = document.getElementById('shops');
      console.log(container);
      let articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2')
      articleEl.appendChild(h2El);
      h2El.textContent = this.location ;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < hours.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.cookiesPerHour[i];
        console.log(this.cookiesPerHour[i]);
        
      };
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `total ${this.totalDailyCookies} cookies`;
    },
    
  };
  
  paris.render();
  
  
  
  
  
  
  const lima = {
    location:  'lima',
    minCust: 20,
    maxCust: 38,
    cookiesPerHour: [],
    avgSale: 2.3,
    totalDailyCookies: 0,  
    
    calcCookiesPerHour: function (){
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour = Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgSale);
        this.totalDailyCookies +=cookiePerHour ;
        console.log(cookiePerHour);
        console.log(this.cookiesPerHour);
        this.cookiesPerHour.push(cookiePerHour);
        
      }
      
    },
    
    
    render: function () {
      this.calcCookiesPerHour();
      const container = document.getElementById('shops');
      console.log(container);
      let articleEl = document.createElement('article');
      container.appendChild(articleEl);
      const h2El = document.createElement('h2')
      articleEl.appendChild(h2El);
      h2El.textContent = this.location ;
      const ulEl = document.createElement('ul');
      articleEl.appendChild(ulEl);
      for (let i = 0; i < hours.length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.cookiesPerHour[i];
        console.log(this.cookiesPerHour[i]);
        
      };
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `total ${this.totalDailyCookies} cookies`;
    },
    
  };
  
  lima.render();
  
  
  
  
  */