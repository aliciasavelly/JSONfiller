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

count = 0;

function interact(arr) {
  arr.forEach( el => {
    helper(el, "body");
  });
}

function helper(arr) {
  console.log("----------");
  // let parent;
  // if (arr["node"] == "root") {
  //   parent = "body";
  // }

  if (arr["node"] == "text") {
    document.getElementByTagName(parent).innerHTML = arr["text"];
    return;
  } else if (arr["node"] == "element" && parent == "body") {
    let newChild = document.createElement(arr["tag"]);
    console.log(newChild);
    for (let attr in arr["attr"]) {
      newChild.setAttribute(attr, arr["attr"][attr]);
    }
    document.getElementById("body").appendChild(newChild);
  }
  // console.log(arr);
  // console.log(arr["node"] == "root");
  // console.log(parent);
  // console.log(parent);
  // if (parent == undefined) {
  //   return;
  // }

  // for (let element in arr) {
  //   interact(element);
  // }
  // console.log(arr["child"]);
  count += 1;
  if (count > 10) {
    return count;
  }

  // console.log(arr["child"]);
  if (arr["child"]) {
    console.log("42");
    console.log(arr["child"]);
    arr["child"].forEach( el => {
      helper(el, arr["tag"]);
    });
  } else {
    console.log("41");
    console.log(arr);
    // for (let el in arr) {
    //   console.log(el);
    //   helper(el, parent);
    // }
    arr.forEach( el => {
      helper(el, parent);
    });
  }
}
