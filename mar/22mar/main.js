/* parsing */

/* parseInt() */
let jakeHeight = "160cm";
let marieHeight = "190cm";
let parseJakeheight = parseInt(jakeHeight);
let parseMarieheight = parseInt(marieHeight);
console.log("parsed height is:", parseJakeheight - parseMarieheight);

/* parsefloat() */
let money = "5.52€";
console.log(parseInt(money));
console.log(parseFloat(money));

/* toFixed() */
let result = 0.12 + 0.22;
console.log(result); // 0.339999999999997---- type : number
console.log(result.toFixed(2)); // 0.30 ----type :string
/* to make it datatype number using parseFloat */
console.log(parseFloat(result.toFixed(2)));