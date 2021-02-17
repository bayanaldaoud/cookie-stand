'use strict';





var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allcookieshops = [];

var cookieshopTable = document.getElementById('cookies-sold');

var cookieShopForm = document.getElementById('add-shop-form');

function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  allcookieshops.push(this);

}


CookieShop.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShop.prototype.cookiesPerHr = function () {
  return Math.round(this.cookiesPerSale * this.custPerHr());
};

CookieShop.prototype.render = function() { 
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);

  var cookiesSold = 0;
  var totalCookiesSold = 0;

  for (var i = 0; i < operationHour.length; i++) {

    cookiesSold = this.cookiesPerHr();

    var tdElement = document.createElement('td');
    tdElement.textContent = cookiesSold;
    trElement.appendChild(tdElement);

    this.cookiesSoldPerHr.push(cookiesSold);

    totalCookiesSold += cookiesSold;
  }

  tdElement = document.createElement('td');
  tdElement.textContent = totalCookiesSold;
  trElement.appendChild(tdElement);
  cookieshopTable.appendChild(trElement);
};

function makeHeaderRow() { 
  var theadElement = document.createElement('thead');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);

  for (var i = 0; i < operationHour.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = operationHour[i];
    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);

  cookieshopTable.appendChild(theadElement);
}

function totalCookiesPerHour() { 
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Hourly Totals';
  trElement.appendChild(thElement);

  var grandTotalCookies = 0;

  for (var i = 0; i < operationHour.length; i++) {
    var totalCookies = 0;
    for( var j = 0; j < allcookieshops.length; j++) {
      totalCookies += allcookieshops[j].cookiesSoldPerHr[i];
      grandTotalCookies += allcookieshops[j].cookiesSoldPerHr[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalCookies;
    trElement.appendChild(tdElement);

  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotalCookies;
  trElement.appendChild(tdElement);
  cookieshopTable.appendChild(trElement);
}
    

new CookieShop('seattle',23,65,6.3);
new CookieShop('tokyo',3,24,1.2);
new CookieShop('dubai',11,38,3.7);
new CookieShop('paris',20,38,2.3);
new CookieShop('lima',2,16,4.6);




function renderallcookieshops() {
  for(var i in allcookieshops) {
    allcookieshops[i].render();
  }  
}  


function addNewCookieShop(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.shopLocation);
  // console.log
 
  (event.target.shopLocation.value);
  var newLoc = 
 
  event.target.shopLocation.value;
  var newMinCust = parseInt(event.target.minCust.value);
  var newMaxCust = parseInt(event.target.maxCust.value);
  var newCookiesPerSale = parseInt(event.target.cookiesPerSale.value);

  new CookieShop(newLoc, newMinCust, newMaxCust, newCookiesPerSale);


  cookieshopTable.innerHTML = '';
  makeHeaderRow();
  renderallcookieshops();
  totalCookiesPerHour();
}

cookieShopForm.addEventListener('submit', addNewCookieShop);



makeHeaderRow();
renderallcookieshops();
totalCookiesPerHour();










/*
const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ;

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