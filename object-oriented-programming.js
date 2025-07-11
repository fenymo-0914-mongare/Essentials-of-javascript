
function objectOP(){
  let programmer={
    name:'jackie',
    language:'javascript',
    writeCode:function(){
      console.log(`${this.name} writes ${this.language} code`);
    },
    drinkCoffee(){
      console.log(`${this.name} drinks coffee`);
    }
  }
  programmer.writeCode()

  let groceryList={
    name:'apple',
    quantity:7,
    display(){
      console.log(`${this.name} :${this.quantity}`)
    }
      
  }
  groceryList.display()

  //Factory Functions
  function createProgrammer(name,language){
    return{
      name,language,
      writeCode:function(){
      console.log(`${this.name} writes ${this.language} code`);
    },
    drinkCoffee(){
      console.log(`${this.name} drinks coffee`);
    }
    }
  }

  let newProgrammer=createProgrammer('Jaantiz','Python')
  newProgrammer.writeCode()

  function groceryListItems(name,quantity){
    return{
      name,quantity,
      display(){
        console.log(`${this.name}:${this.quantity}-${groceryListItems.state}`);
      }
    }
  }

  let newList= groceryListItems('bananas',6)
  newList.display()
  
}

objectOP()

function constructorFunc(){
  function programmer(name,language){
  this.name=name,
  this.language=language,
  this.writeCode=()=>{
  console.log(`${this.name} writes ${this.language} code`);
  }
  }
  let newProgrammer=new programmer('Jayanti Khatri',"C")
  newProgrammer.writeCode()

  function groceryItems(name,quantity){
    this.name=name,
    this.quantity=quantity,
    this.display=()=>{
      console.log(`${this.name} X ${this.quantity}`);
    }
  }


  let listItems= new groceryItems('Tomatoes',6)
  listItems.display()
  console.log(listItems.constructor);
  listItems.state="fresh"
  console.log(listItems);
  
  
}
constructorFunc();

function functionObjects(){
  function add(x,y){
    return y*x;
  }
  let n=add
  console.log(n(3,4));

  function groceryItems(name,quantity){
    this.name=name,
    this.quantity=quantity,
    this.display=()=>{
      console.log(`${this.name} X ${this.quantity}`);
    }
  }

  let listItems= new groceryItems('Tomatoes',6)
  listItems.display()

  function calculatePrice(groceryItem,price){
    return groceryItem.quantity*price
  }

  let grocceryVar=calculatePrice
  console.log(grocceryVar(listItems,5));
  
}
functionObjects()

function enumer(){
  let library={
    name:'Jontez Marcos',
    admNo: 8449,
    libCard: true,
    form:4
  }

  let keys=Object.keys(library)
  for(let key of keys)
    console.log(key);
  let values=Object.values(library)
  for(let value of values)
    console.log(value);
  let entries=Object.entries(library)
  for(let entry of entries)
    console.log(`Key:${entry[0]} - Value:${entry[1]}`);
}
enumer()

function abstraction(){
  function employees(name,age){
    this.name=name,
    this.age=age,
    //public method
    this.desc=function(){
      console.log(`${this.name} is ${this.age} years old. `);
    }
     //private method
    const employe=()=>{
      console.log(`${this.name} is our emloyee here`)
    };
     //public method
    this.work=()=>employe()
  }

  let newEmployee=new employees("Garcia Sam",56);
  newEmployee.desc();
  newEmployee.work();
  //showing what is necessary
  //avoiding complexity-modularity

   function groceryItems(name,quantity){
    this.name=name,
    this.quantity=quantity,
    this.display=()=>{
      console.log(`${this.name} X ${this.quantity}`);
    }
    
  }


  function groceryList(){
    const items=[];

    this.getTotal=()=>{
      return calculateTotalQuantity()
    }
    this.addItem=(name,quantity)=>{
      const item=new groceryItems(name,quantity)
      items.push(item)
    }
    const calculateTotalQuantity=()=>{
      return items.reduce((total,item) => total + item.quantity,0)
    }
    this.displayItems=()=> items.forEach(item =>item.display())
  }
 const list=new groceryList()
 list.addItem('apples',7)
 list.addItem('bananas',6)
 list.displayItems()
 console.log(`Total quantity: ${list.getTotal()}`);
 
 //private properties and methods

  function makefunctions(){
    let num=0;
    function numIncrement(){
      num++
    }
    return{
      logNum:()=>console.log(num),
      increment:()=>{numIncrement();
        console.log("incremented")
      }
    }
  }

  const {logNum,increment}=makefunctions();
  logNum()
  increment()
  logNum( )

  function programmer(name,language){
    let privateName=name
    this.language=language
    this.writecode =()=>console.log(`${privateName} always learns ${this.language}`);
    let drinkCoffee=()=>console.log(`${privateName} loves taking coffee.`);
    this.startDay=()=>drinkCoffee()
    //Using getters making local  public
    Object.defineProperties(this,{
      name:{
      get:()=>{
        return privateName
      },
      set:(newName)=>{
        if(!newName){
          console.log('Name cannot be empty!');
          return
        }else{
          privateName=newName;
        }
      }
     }
    })
  }

  let newProgrammer= new programmer("Jess Lauren",'Python')
  newProgrammer.writecode()
  newProgrammer.startDay()
  console.log(newProgrammer.name);
  newProgrammer.name='Jontex'
  console.log(newProgrammer.name);
  
  

  function bankAccount(accBalance=0){
    let balance=accBalance;
    const inOutAmount=(amount=0)=>{
      return balance+amount
    }
    this.deposit=(amount)=>{
      if(amount>0){
        balance +=amount
        console.log(`amount deposited Kshs.${amount} successfully`);
      }
    }
    this.withdraw=(amount)=>{
      if(amount>0){
        balance -=amount
        console.log(`amount withdrawn Kshs.${amount} successfully`);
        
      }
    }
    this.getBalance=()=>{return balance}
  }
  const account=new bankAccount()
  account.deposit(500)
  account.withdraw(50)
  console.log(`Account balance Kshs.${account.getBalance()}`);
  

}
abstraction()