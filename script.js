var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/
/*
Fact List on Gender Wage Gap
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps. As a student, my learning now depends on my access to the internet. For example, " + learning + ". Please support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps.";
}


//Move these variables to the top
var factList = [
  "Women with bachelor’s degrees working full time are paid 26% less than their male counterparts. Though women in the U.S. now earn more college and postgraduate degrees than men, they also hold nearly two-thirds of the nation’s outstanding student debt — $929 billion.", 
  "Women face an income gap in retirement. Because they have earned less and therefore paid less in the Social Security system, they receive less in Social Security benefits. They also lag behind men in pension benefits, as well as retirement savings. ", 
  "Black and Latina women with only a bachelor’s degree have the largest gap at 65%, and Black women with advanced degrees earn 70% of what white men with advanced degrees earn.", 
  "Although the gender pay gap has narrowed over time, at the current rate of change, it will not close until 2059, according to the Institute for Women’s Policy Research. ", 
  "Women’s median earnings are lower at every level of education. In fact, women are often out-earned by men with less education: the typical woman with a graduate degree earns $5,000 less than the typical man with a bachelor’s degree.", 
  "In the typical (median) household with a mother working outside the home, women contribute nearly 40 percent of their family’s total earnings. "
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
