let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xmlhttp = new XMLHttpRequest();
let htmlPage;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    htmlPage = JSON.parse(this.responseText);
    interact(htmlPage);
  }
}

xmlhttp.open('GET', 'https://aliciasavelly.github.io/JSONfiller/');
xmlhttp.send('');

function interact(arr) {
  console.log(arr);
  console.log("-----");
  arr.forEach( el => {
    console.log(el);
  });
}
