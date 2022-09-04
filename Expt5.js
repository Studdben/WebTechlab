 //Q1
 function length() {
     const sentence = document.getElementById("lgth").value;
     const words = sentence.split(" ");
     let sLen = words[0].length,
         lLen = words[0].length;
     let sIndex = 0,
         lIndex = 0;
     words.forEach((word, index) => {
         if (word.length < sLen) {
             sLen = word.length;
             sIndex = index
         }
         if (word.length > lLen) {
             lLen = word.length;
             lIndex = index
         }
     })
     document.getElementById('res1').value = words[lIndex];
     document.getElementById("res2").value = words[sIndex];
 }

 //Q2
 function calculate() {
     var a = parseFloat(document.getElementById('weight').value);
     var b = parseFloat(document.getElementById('height').value);
     var bm = b * b;
     var bmi = a / bm;

     document.getElementById('score').innerHTML = bmi;

     if (bmi <= 18) {
         document.getElementById('type').innerHTML = "Underweight";
     } else if (bmi > 18 && bmi <= 25) {
         document.getElementById('type').innerHTML = "Normal";
     } else if (bmi > 25 && bmi <= 30) {
         document.getElementById('type').innerHTML = "Overweight";
     } else {
         document.getElementById('type').innerHTML = "Obese";
     }

 }

 //Q3 
 function q3() {
     const idx = Math.floor(Math.random() * 2);
     const img = ["https://ychef.files.bbci.co.uk/1600x900/p07v2wjn.webp", "https://xzdl43v0mdf2m45tz2aj7kkv35-wpengine.netdna-ssl.com/wp-content/uploads/2010/10/orange.jpg"]
     const h = document.getElementById("height").value;
     const w = document.getElementById("width").value;
     document.getElementById("garden").innerHTML = "<img src=" + img[idx] + " height=" + h + " width=" + w + ">";

 }

 //Q4
 function convert() {
     var index1 = document.getElementById("from").selectedIndex;
     var opt1 = document.getElementById("from")[index1].value;
     var rup = parseFloat(document.getElementById('data').value);
     var index2 = document.getElementById("to").selectedIndex;
     var opt2 = document.getElementById("to")[index2].value;
     if (opt1 == "IR") {
         if (opt2 == "IR") {
             document.getElementById('ans').value += rup;

         } else if (opt2 == "DOLL") {
             var con = rup * 0.013;
             document.getElementById('ans').value += con;
         }

     } else if (opt1 == "DOLL") {
         if (opt2 == "DOLL") {
             document.getElementById('ans').value += rup;

         } else if (opt2 == "IR") {
             var val = rup * 79.59;
             document.getElementById('ans').value += val;

         }
     }
 }

 //Q5
 let hc = 0;
 let tc = 0;

 function flip() {

     const idx = Math.floor(Math.random() * 2);
     const img = ["https://i.postimg.cc/wv58jZNW/Head.png", "https://i.postimg.cc/05f1RgPj/Tail.png"]
     if (idx == 0)
         hc += 1;
     else
         tc += 1;
     document.getElementById("coin").innerHTML = "<img src=" + img[idx] + "height=150 width=150" + ">"
     document.getElementById("count").innerHTML = "Head Count: " + hc + "<br>" + "Tail Count: " + tc;
 }

 //Q6
 function cakeType() {
     const cakeType = document.getElementById("cake").value;
     const tip = parseInt(document.getElementById("tip").value);
     const tax = 9;
     let tipCost, taxCost, totalCost;
     if (cakeType == "Small") {
         cakeCost = 100;
         taxCost = (cakeCost * (tax / 100));
         tipCost = parseFloat(((cakeCost + taxCost) * (tip / 100)).toFixed(2));
         totalCost = cakeCost + taxCost + tipCost;
     } else if (cakeType == "Medium") {
         cakeCost = 200;
         taxCost = (cakeCost * (tax / 100));
         tipCost = parseFloat(((cakeCost + taxCost) * (tip / 100)).toFixed(2));
         totalCost = cakeCost + taxCost + tipCost;

     } else if (cakeType == "Large") {
         cakeCost = 400;
         taxCost = (cakeCost * (tax / 100));
         tipCost = parseFloat(((cakeCost + taxCost) * (tip / 100)).toFixed(2));
         totalCost = cakeCost + taxCost + tipCost;
     }

     document.getElementById("cost").innerHTML = "Cake Cost: " + cakeCost + "<br>" + "Tax Cost: " + taxCost + "<br>" + "Tip Cost: " + tipCost + "<br><br>" + "Total Cost: " + totalCost;

 }