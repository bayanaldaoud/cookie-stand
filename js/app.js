'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] ;

function getRandomNo(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
} 
const Seattle = {
  Location : 'Seattle',
  minCust :  23,
  maxCust : 65,
  avgCookieSale : 0,
  avgSale : 	6.3 ,
  
  gitAvgSale : function (min , max){
    
    this.avgCookieSale = getRandomNumber (min,max);

  },
 
 
render: function () {
  const container = document.getElementById('Seattle');

  let articleEl = document.createElement('article');
  container.appendChild(articleEl);
 const h2El = document.createElement('h2')
 articleEl.appendChild(h2El);
 h2El.textContent = this.Location ;
 const ulEl = document.createElement('ul');
 articleEl.appendChild(ulEl);
 let sum = 0;
   for (let i = 0; i < hours.length; i++) {
   const liEL = document.createElement('li');
   ulEl.appendChild(liEL);
    Seattle.getRandomNo();
   }
  
  },
   
};


const Tokyo = {
  Location : 'Tokyo',
  minCust :  3,
  maxCust : 24,
  avgCookieSale : 0,
  avgSale : 	1.2 ,
  
  gitAvgSale : function (min , max){
    
    this.avgCookieSale = getRandomNumber (min,max);

  },
 
 
render: function () {
  const container = document.getElementById('Tokyo');

 const articleEl = document.createElement('article');
 container.appendChild (articleEl);
 const h2El = document.createElement('h2');
 articleEl.appendChild(h2El);
 h2El.textContent = this.Location ;
 const ulEl = document.createElement('ul');
 articleEl.appendChild(ulEl);
 let sum = 0;
   for (let i = 0; i < hours.length; i++) {
   const liEL = document.createElement('li');
   ulEl.appendChild(liEL);
   Tokyo.getRandomNo();
   }
  
  },
   
};


const Dubai = {
  Location : 'Dubai',
  minCust :  11,
  maxCust : 38,
  avgCookieSale : 0,
  avgSale : 3.7 ,
  
  gitAvgSale : function (min , max){
    
    this.avgCookieSale = getRandomNumber (min,max);

  },
 
 
render: function () {
  const container = document.getElementById('Dubai');

 const articleEl = document.createElement('article');
 container.appendChild (articleEl);
 const h2El = document.createElement('h2');
 articleEl.appendChild(h2El);
 h2El.textContent = this.Location ;
 const ulEl = document.createElement('ul');
 articleEl.appendChild(ulEl);
 let sum = 0;
   for (let i = 0; i < hours.length; i++) {
   const liEL = document.createElement('li');
   ulEl.appendChild(liEL);
   Dubai.getRandomNo();
   }
  
  },
   
};


const Paris = {
  Location : 'Paris',
  minCust :  20,
  maxCust : 38,
  avgCookieSale : 0,
  avgSale : 	2.3,
  
  gitAvgSale : function (min , max){
    
    this.avgCookieSale = getRandomNumber (min,max);

  },
 
 
render: function () {
  const container = document.getElementById('Paris');

 const articleEl = document.createElement('article');
 container.appendChild (articleEl);
 const h2El = document.createElement('h2');
 articleEl.appendChild(h2El);
 h2El.textContent = this.Location ;
 const ulEl = document.createElement('ul');
 articleEl.appendChild(ulEl);
 let sum = 0;
   for (let i = 0; i < hours.length; i++) {
   const liEL = document.createElement('li');
   ulEl.appendChild(liEL);
   Paris.getRandomNo();
   }
  
  },
   
};



const Lima = {
  Location : 'Lima',
  minCust :  2,
  maxCust : 16,
  avgCookieSale : 0,
  avgSale : 4.6,
  
  gitAvgSale : function (min , max){
    
    this.avgCookieSale = getRandomNumber (min,max);

  },
 
 
render: function () {
  const container = document.getElementById('Lima');

 const articleEl = document.createElement('article');
 container.appendChild (articleEl);
 const h2El = document.createElement('h2');
 articleEl.appendChild(h2El);
 h2El.textContent = this.Location ;
 const ulEl = document.createElement('ul');
 articleEl.appendChild(ulEl);
 let sum = 0;
   for (let i = 0; i < hours.length; i++) {
   const liEL = document.createElement('li');
   ulEl.appendChild(liEL);
   Limas.getRandomNo();
   }
  
  },
   
};


Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();













