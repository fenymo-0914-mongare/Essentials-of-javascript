console.table({Name:"Jennit",Age:23})
console.clear()

let userName= 'festusnyakwara@gmail.com\n';
let gender = 'male\n'
let handle = 'nyakwara  festus\n'
console.log(typeof handle)
console.log(userName,gender,handle)
// console.clear()
let num="1";
num = Number(num)
console.log(num)

let sqrt=4**4
console.log(sqrt)

let jsproglang=true
let jshard=false

let a=9;
let b=2;

console.log (a>b)

let firstName="Festus";
let middleName="Nyakwara"
let surname="Mong'are"

// Concatenation
let fullName=firstName.concat(middleName).concat(surname)
console.log(fullName)

// Append
middleName +=" come here!"
console.log(middleName)
console.log(firstName.length)

// cases
console.log(surname.toUpperCase());

// slice
console.log(firstName.slice(0,3));

// split & join
console.log(firstName.split(" ").join(" "));

// includes
console.log(firstName.includes("u"));

// Trimming-removing spaces
console.log(handle.trim(" "));

// string conversions
let money="50";
money=parseInt(money)//+ or Number instead of parseInt
console.log(money,typeof money);

let digit=0;
digit=digit.toString()
console.log(digit, typeof digit);

// Control statements

let password=7;

if(password===8){
  console.log("Welcome")
}else if(password<=8){
  console.log("Password too short!");
}else if(password>8){
  console.log("passwordd too long.");
}else
  {
  console.log("Provide a password")
}

let k=0;
for (let i=0;i<10;i++){
  console.log("we are repeating!",i);
}

while (k<=5) {
  console.log("we are doing it again!",k);
  k++
}

do{
  console.log("no stopping",k);k++
}while(k<9)
console.clear()
let array=["name","ids","admission"]
console.log(array[2]);

let favsingers=["Merle Haggard","Jim Reeves","Dolly Parton"]
console.log(favsingers[0]);

/*
ARRAY METHODS
Concat-joins two or more array and returns the result
includes-cheks an array contains a specified element
Push-adds new element to the end of an array
unshift-adds a new element to the beginning of an array
pop-removes the last element of an array and returns the removed element
sort-sorts elements alphabetically and ascending order
slice-selects the part of an array and returns the new array
splice-removes or replaces existing elements or adds new elements
*/

const fruits=[
  "apples",
  "pomogranate"
]
const citric=["orange","lemon"]

fruits.push("mango")
fruits.sort()
console.log(fruits);
let totalFruits=fruits.concat(citric)
console.log(totalFruits);


const person={
  firstName:"Festus",
  middleName:"Nyakwara",
  surname:"Mong'are",
  age: 20
}
console.log(person);
delete person.middleName
console.log(typeof person);
console.log(person);

const car={
  type:"Mazda",
  model:"CX-8",
  color:"Titan"
}

car.type="Toyota"
car.wheels="All-Terrain"

console.log(car)

function add(x,y) {
  return x+y
}
console.log(add(3,6));

function divide(a,b){
  return a/b
}

const ans=divide(2,6)
console.log(ans);

const greet=function(user){
  console.log(`Hello ${user}`);
  
}
greet("Marto")

function showCall(func){
  const value = 10;
  func(value)
}
showCall(function(value){
  console.log(value)
})

function main(paraFunc){
const num = 20;
paraFunc(num);
}

main((num)=>{
  console.log(num);
})

//Methods in JS

function newFunc(){
  return `My name is ${client.name} & I am ${client.age} years old.`
}

let client={
  name: "Mason",
  age: 40,
  newFunc
}

console.log((client.newFunc()));

let clients={
  name: "Martin",
  age: 40,
  newFunction:function(){
    return `My name is ${clients.name} & I am ${clients.age} years old.`
  }
}

console.log((clients.newFunction()));

const jsonfile={
  Name:"John Doe",
  "age":20,
  "email":"jodoe@gmail.com",
  "hobbies":["Reading","Cooking"],
  "address":{
    "city":"New York",
    "ID":"jsx str"
  }
}

console.log(jsonfile);


const currentDate=new Date()
console.log(currentDate);

let year=currentDate.getFullYear
console.log(year);
let month=currentDate.getMonth 
console.log(month);

let date=new Date()
date.setDate(date.getDate()+1)

console.log(date.toDateString());

setTimeout(()=>{
  console.log("Helloo");
  setTimeout(function(){
    console.log("Heey");
    setTimeout(()=>{
      console.log("Good morning");
      setTimeout(function(){
        console.log("Arise and shine");
      },2000)
    },2000)
  },2000)
},2000)


// Object Literal 
function students(identity,age,room){
  return{
    identity: identity,
    age:age,
    room:room
  }
}
const adm001=students("Kenyan",19,"RM29")
console.log(adm001);


const objLiteral=(a,b,c,sum,multi)=>{
  return{
  a:a,
  b:b,
  c:c,
}
}
obj={
  sum: (d,e)=>d+e,
  multi: (d,e)=>d*e
}
variableI=objLiteral(4,6,7)
console.log(variableI);
console.log(obj.sum(3,8));
console.log(obj.multi(3,8));

function getPersionES5(name,age,height){
  return{
    name:name,
    age:age,
    height:height,
  }
}

console.log(getPersionES5("Matic",37,1.9));

//Default  function parameters

function count5(count=false){
  if(count===true){
    for(let i=0;i<=5;i++){
        console.log(`Count: ${i}`);
    }
  }
}
count5(true)

function ratin(rate){
  if(rate===5){
    console.log("high rating");
  }else if(rate===1){
 console.log("Low ratings");
  }
}
ratin()

function multiply(a,b=6){
return a*b
}

console.log(multiply(4));

// spread operator-Iterable and expands it  into individual ElementInternals
// used to make shallow copies of JS(...name)

const colors=['red','yellow','black','blue']
function spread(a,b,c,d){
  console.log("a",a);
  console.log("b",b);
  console.log("c",c);
  console.log("d",d);

  const numbers={x:1,y:2}
  const num={z:3}
  const total={...numbers,...num}
  console.log(total  );
}
spread(...colors)

function variadicFunc(x,y,...more){
  console.log(x,y,more);
  
}variadicFunc(1,2,3,4,5,6,7,8,9,0)


// Destructuring-Allows to unpack values data structures int distinct variables

function Destructuring(){
  array=()=>{
    return[100,20]
  }
  let a,b;
  [a,b]=array();
  console.log(a,b);
  //Assigning rest of an array variable
  let[x,...y]=["one",'two',"true",'true',["array"]]
  console.log(y);
  let [clrI,clrII,clrIII,...colors]=["red","green","blue","yellow","orange"]
  console.log("colorI",clrI);
  console.log("colorII",clrII);
  console.log("colorII",clrIII);
  console.log("all-colors",colors);
  // Object
  const student={identity:"Kenyan",position:"First",admNo:11943}
  let{identity}=student;
  console.log(identity);
  let{numI,numII,...allNum}={numI:12,numII:26,numIII:15,numiV:49}
  console.log(allNum);

  const person={
    name:"John Doe",
    age:30,
    country:"USA"
  }

  function personalInfo({name,age,country}){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
  }
  personalInfo(person)

  const artist=[
    {name:'Lucky you', artistName:'Joyner', duration:4.34},
   { name:'Just like you',artistName:'NF', duration:3.23},
   {name:'humble singer', artistName:'Kendrick Kumar', duration:2.23}
  ];
  let [, {artistName}]=artist
  console.log(artistName);
  
  const data={
    user:{id:123,name:'john doe',age:49, email:'johndoe@gmail.com',address:{city:'New york',country:'USA'},
    hobbies:['reading','painting','cooking'],
    scores:{math:78,science:78,history:65},},
  products:[
    {id:1,name:'laptop',price:20000},
    {id:2,name:'phone',price:10000},
    {id:3,name:'tablet',price:12000}]
  }
  let {user:{name,email,address:{city,country}},
  products:[productI,productII,productIII]}=data;
  console.log(name)
  console.log(email);
  console.log(city);
  console.log(country);
  console.log(productI,productII,productIII);
 
  function password(pass){
    let password=8;
    return (password===8)?'strong  password':'password should be of 8 characers'
  }
  console.log(password(8));
} 
Destructuring()

//for in Objects

function forObjects(){
  //for in...
  let person={name:'John Doe',age:19,};
  for(let keys in person){
    console.log(keys,person[keys]);
  }
  let list=["one",'two','three']
  for(let index in list){
    console.log(`${index}:${list[index]}`);
  }
  let object={a:1,b:2,c:3}
  for(keys in object){
    console.log(keys,object[keys]);
  }

  //for of... -arrays only
  let persons=['huxn','alex','john','bradley']
  for(let person of persons){
    console.log(person);
  }

  //forEach-arrays only
  let cars=['mazda','toyota']
  cars.forEach(car => {
    console.log(car)
  });
  cars.forEach((letter,index,yard)=>{
    yard[index]=letter[0].toUpperCase() + letter.substring(1)
    console.log(cars)
  })

  let digits=[1,2,3,4,5,6,7,8,9,0]
  let sum=0;
  function add(digits){
    sum +=digits
  }
  digits.forEach((add))
  console.log(sum);
  //map()
  let double=digits.map(digits=>digits*2)
  console.log(double);
  let square=digits.map(digits=>digits**2)
  console.log(square);
  //multiplies each by 10 
  let times=digits.map(digit=>digit*10)
  console.log(times)

  //filter()
  let products=[
    {id:1,name:'laptop',price:20000},
    {id:2,name:'phone',price:10000},
    {id:3,name:'tablet',price:12000}]
    filterPrice=products.filter(products =>products.price>15000)
    console.log(filterPrice);
    
  let computers=[
    {ram:4, ssd:128},
    {ram:8, ssd:256},
    {ram:16, ssd:500}
  ]
  console.log(computers.filter(r=>r.ssd>=200));

  let words=['spray','limit','elite','exeberant','detruction','present'];
  console.log(words.filter(w=>w.length>6));
  //find()
  console.log(words.find(f=>f=='elite'));
  let posts=[
    {id:1,content:'good post'},
    {id:2,content:'funny post'},
    {id:3,content:'sad post'},
  ]
 console.log(posts.find(cont=>cont.content==='sad post'));
 let ages=[2,49,14,76,8,18]
 console.log(ages.filter(ag=>ag>=18));
 let items=[
  {name: 'checkers', category:'toys' ,},
  {name: 'harry potter', category: 'books',},
  {name: 'iphone', category:'electronic' ,},
  {name: 'learn php', category: 'books',},
 ]
 console.log(items.filter(cate=>cate.category==='books'));
 console.log(items.every(cate=>cate.category.length==4));
 console.log(items.some(cate=>cate.category.contain='t'));
 //reduce()-accumulates
 let sumAge=ages.reduce((prev,cur)=>{
  return prev+cur;
 },0) 
 console.log(sumAge);
 let oldest=ages.reduce((prev,cur)=>(cur>prev?cur:prev),0)
 console.log(oldest);
 let fruits=['apple','orange','grapes','banana','apple','orange','grapes','banana','apple']
 let wordFrequency=fruits.reduce((frequency,fruit)=>{
  frequency[fruit]=(frequency[fruit]||0)+1
  return frequency
 },{})
 console.log(wordFrequency);
 let numbers=[2,3,4,5]
 let sumNum=numbers.reduce((prev,cur)=>{
  return prev*cur
 },1)
 console.log(sumNum);
}
forObjects()

//Map-data-structure
/*Allows you store key-value pairs where both keys and values can be of any data-type.
Keys-can be of any data-type: strings symbols numbers booleans objects objects booleans
Maintains insertion order- preserves the order of key-value pairs as inserted
Iteration: provides built-in methods for easy iteration over elements */

function mapData(){
  let map=new Map();
  let keyOne=[];
  let keyTwo={name: 'Daniella'}

  map.set(keyOne,"value of key one")
  map.set(keyTwo,"value of key two")
  // console.log(map.keys());
  // console.log(map.values());
  // console.log(map.size);
  //   console.log(map.delete(keyOne));
  console.log(map);
  for(let [key,value]of map){
    console.log(`Key:${key} -- value:${value}`);
  }
  for(let keys of map.keys()){
    console.log(keys);
  }
  for(let values of map.values()){
    console.log(values);
  }

  let mapI=new Map()
  let a=1
  let b=2
  let c=3
  for(let [key,value]of mapI){
    console.log(key,value);
  }
  mapI.set(a,"value of a")
  mapI.set(b,"value of b")
  mapI.set(c,"value of c")
  console.log(mapI.get(a));
  console.log(`mapI size: ${mapI.size}`);
  console.log(mapI.delete(b));
  console.log(`mapI size: ${mapI.size}`);
}
mapData()

/*SET-reps collection of unique values only no duplicates*/
function setData(){
  let set=new Set()
  set.add("apple")
  set.add("oranges")
  set.add(23)
  // console.log(set.delete('oranges'));
  for(let properties of set){
    console.log(properties);
  }
  let letters=new Set()
  letters.add("a")
  letters.add("b")
  letters.add("c")
  for(let letter of letters){
    console.log(letter);
  }
}
setData()

function domManipulation(){

  //creating an element
  function createElement(){
    let movies=document.querySelector(".list")
    let list=document.createElement("li")
    list.textContent="Night agent"
    movies.append(list)
    //styling
    movies.style.color="Blue"
    //removing
    list.remove()
  }
  createElement()
}
domManipulation()



