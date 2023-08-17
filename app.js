// function declaration 
// info ();

// function info () {
//   console.log( " i love js "); // age call kora jay 
// }


// function expression 
//  const info = function () {
//   console.log( " i love js "); // age call kora jay na
// }
// info();

// array  function 
// const info =  () => {
//   console.log( " i love js "); // age call kora jay  na 
// }
// info();


/****
 * 
 *****   curried function 
 */

function add(a){
 return function(b){
  return a + b;
 };
};

function dev(a){
  return function(b){
    return function(c){
      return function(d){
        return function(e){
          return function(f){
             return a + b + c + d + e + f;
          };
        };
      };
    };
  };
};
 console.log(add(7)(5));
console.log(dev(1)(2)(3)(4)(5)(6));

const abcd = (a) => (b) => (c) => (d)=> {
  return a + b + c + d;
}
console.log(abcd(4)(5)(6)(7));


/***
 * 
 * callback function 
 */
 
const result = (a,b, test) => {
   return ` ${test()} ${a+b},,, is the result `;
}

const myCallBack = ()=> {
   return 'i love js';
}

console.log(result(4 , 5, myCallBack));


/***
 * 
 * async & await function 
 */

const data = "i love js & php";

const amiTmi = async () => {
  const test = await data;
 console.log(test);
}

console.log("line no 1");
console.log("line no 2");
console.log("line no 3");
amiTmi();
console.log("line no 5");
console.log("line no 6");
console.log("line no 7");

/***
 * 
 * promis function 
 */

const age = 32;

const ageCheck = new Promise ((resolve , reject) => {
      if (age >= 21) {
        resolve ("tmi biye korte paro akn") ;
      }else{
        reject ("vai tmr boyos kom ,,,,, wait koro" );
      }
});

ageCheck.then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error);
})

// API CLASS OF FETCH 

 const fetchData = async ()=> {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  console.log(posts);
 }
 fetchData();


const user = document.getElementById("user");

const getPost = async () => {
   await fetch("https://jsonplaceholder.typicode.com/users")
   .then((res) => res.json())
   .then((res) =>{
     
    let content = "";
    res.map((item, index) => {
      content += `
       <h2> ${item.name} ,,,, ${item.username} ,,,, ${item.email}</h2>
      `
    })
    user.innerHTML = content;

   })
   .catch((error) => {
    console.log(error);
   });
};
getPost();





