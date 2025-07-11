//parent===base===super class
//child===sub===derived
// 1.classical inheritance  2.prototypical inheritance

function protoTypes(){
  let user ={
    name:'georges',
    surname:'walker',
    email:'georgewalker@gmail.com',
    isActive:false,

    set fullName(value){
      [this.name,this.surname]=value.split(' ')
    },
    get fullName(){
      return `${this.name} ${this.surname}`
    },
    login(){
      console.log(`${this.fullName} logged in successfully`)
    },
    logout(){
      console.log(`${this.fullName} logged out successfully`)
    }
  }
  let admin ={
    __proto__:user,
    isAdmini:true,
    manageUsers(){
      return `${this.fullName} is managing the users`
    }
  }
  let guest={
    __proto__:user,
    isGuest:true,
    surf(){
      return `${this.fullName} is browsing content`
    }
  }

  let superAdmin={
    __proto__:admin,
    isSuperAdmin:true,
    manageAdmins(){
      return `${this.fullName} is managing admins`
    }
  }

  superAdmin.fullName='jayd ray'
  // for(let key in admin){
  //   console.log(key);
  // }
  // let entries=Object.entries(superAdmin)
  //   for(let entry of entries){
  //     console.log(`entry[0]:entry[1]`);
  //   }
  console.log(Object.keys(admin));

  const programmers={
    writeCode: function(){
      console.log(`writing codes on ${this.language}`);
    },
    drink:()=>{
      console.log("Loves drinking coffee");
    }
  }
 
  function Programmer(name,language){
    let reName=name
    this.language=language
    Object.defineProperties(this,{
      name:{
        get(){ return reName
        },
        set(PrivateName){
          reName=PrivateName
        }
      }
    })
    Object.setPrototypeOf(this,programmers)
  }

  const prog= new Programmer('Martin','TypeScript')
 
  prog.writeCode()
  prog.drink()
  console.log(prog.name);
  console.log(prog.language)
  //__proto__ property is a reference to the prototype of an object.
  //It allows inherit properties and methods from another
}
protoTypes()

function ThreeMultiLevel(){
  let person={
    name:'Chicago'
  }
  console.log(person);

  for (let key in person){
    console.log(key);
  }
  for (let values in person){
    console.log(values);
  }
  console.log(Object.values(person))

  //Property Descriptor
  //detremine whether a property can be accessed, modified, iteratable, innumarable
  //innumarable-true>Appears on four loop and object.keys
  //Writable-true>property's value can be changed
  //Configurable-true>property descript can be changed or be deleted

  let objectBase=Object.getPrototypeOf(person)
  const propertyDescriptor=Object.getOwnPropertyDescriptor(objectBase,'toString')
  console.log(propertyDescriptor)
} 
ThreeMultiLevel()

function constructorProtoTypes(){
//Constructors are used to create instances of objects 
  function Programmer(name,language){
    this.name=name;
    this.language=language
  }
  Programmer.prototype.writeCode=function (){
    console.log(`${this.name} writes code in ${this.language}`)
  }
  Programmer.prototype.toString=function (){
    return `Programmer:${this.name}, Language:${this.language}`
  }
  //manages memory efficiently
  const prog = new Programmer("Joe Don","React.js")
  prog.writeCode()
  prog.toString()
  for(let key in prog){
    console.log(key);
  }
  console.log(prog.hasOwnProperty('writeCode'));
  //Avoid extending the built-in Objects ==>>
  //can cause conflicts with their third party Libraries
  // Array.prototype.shuffle=function(){
  //   //shuffle logic here
  //   console.log('shuffle');
  // }
  function shuffleArray(array){
    //logic here
    return array
  }
  const array=[]
  // array.shuffle()
  const shuffledArray=shuffleArray(array)

  if(typeof Array.prototype.shuffledArray !== 'function'){
    Array.prototype.shuffle=function(){
    //shuffle logic here
    console.log('shuffle');
  }
  }

  
}
constructorProtoTypes()
console.log(constructorProtoTypes.prototype);

//creating own prototypical Inheritance

function ProtoTypical(){
  function programmer(identity){
    this.identity=identity;
  }

  programmer.prototype.code=function (){
    console.log(`${this.identity} likes coding all languages`)
  }
  programmer.prototype.debug=function (){
    console.log(`${this.identity} likes debugging errors`)
  }
  programmer.prototype.meeting=function (){ 
    console.log(`${this.identity} likes attending the meetings`)
  }
  
  const prog= new programmer("Chalice")
  prog.code()
  prog.debug()
  
  const prog1= new programmer("Martin")
  prog1.meeting()
  prog1.debug()

  function FrontEnd(identity){
    programmer.call(this,identity)
  }
  function BackEnd(identity){
    programmer.call(this,identity)
  }
  //setting up the inheritance
  FrontEnd.prototype=Object.create(programmer.prototype)
  BackEnd.prototype=Object.create(programmer.prototype)

  FrontEnd.prototype.constructor=FrontEnd
  BackEnd.prototype.constructor=BackEnd 

  const prog2=new FrontEnd("Doe")
  prog2.code()

  const prog3=new BackEnd("Joe")
  prog3.meeting()

  console.log(FrontEnd.prototype.constructor === programmer);
  
  //Resetting the constructor
}
ProtoTypical()

function SuperConstructor(){
  function Programmer(identity,specialization){
    this.identity=identity
    this.specialization=specialization
  }
  Programmer.prototype.code=function (){
    console.log(`${this.identity} likes coding all languages`)
  }
  Programmer.prototype.debug=function (){
    console.log(`${this.identity} likes debugging errors`)
  }
  Programmer.prototype.meeting=function (){ 
    console.log(`${this.identity} likes attending the meetings`)
  }

  const newprog=new Programmer("Carla","FrontEnd","Flask")
  newprog.code()
  function FrontEndProgrammer(identity,specialization,library){
    Programmer.call(this,identity,specialization)
    this.library=library
  }

   function BackEndProgrammer(identity,specialization,library){
    Programmer.call(this,identity,specialization)
    this.library=library
  }

  function extend(Child,Parent){
    Child.prototype=Object.create(Parent.prototype)
    Child.prototype.constructor=Child
  }
  extend(FrontEndProgrammer,Programmer)
  extend(BackEndProgrammer,Programmer)

  //Method overriding >>code
  FrontEndProgrammer.prototype.code=function (){
    Programmer.prototype.code.call(this)//calling the base implementation runs in correct context 
    console.log(`${this.identity} is coding in HTML/CSS/JS`)
  }
  const prog3=new FrontEndProgrammer("Chalice","Frontend","React")
  console.log(prog3)
  prog3.debug()
  prog3.code() 
  const prog1=new BackEndProgrammer("John","BackEnd","Django")
  console.log(prog1)
}
SuperConstructor()

function PolyMorphism(){
  //code flexibility and reusability
  function extend(Child,Parent){
    Child.prototype=Object.create(Parent.prototype)
    Child.prototype.constructor=Child
  }

  function Programmer(identity){
    this.identity=identity
  }

  Programmer.prototype.work=function (){
    console.log(`${this.identity} is working on programming tasks.`);    
  }

  function FrontEndProgrammer(identity){
    Programmer.call(this,identity)
  }
  function BackEndProgrammer(identity){
    Programmer.call(this,identity)
  }

  extend(FrontEndProgrammer,Programmer)
  extend(BackEndProgrammer,Programmer)

  
  FrontEndProgrammer.prototype.work=function (){
    console.log(`${this.identity} designs and codes on front-end`)
  }

  BackEndProgrammer.prototype.work=function(){
    console.log(`${this.identity} works on database and api logic`)
  }
  
  const prog=new FrontEndProgrammer("Miller")
  const progI=new BackEndProgrammer("Milner")

  const programmers=[
    prog,progI
  ]

  for(let programmer of programmers){
    programmer.work()
  }
}
PolyMorphism()

function useInheritance(){
  function Programmer(identity){
    this.identity=identity
  }

  const canCode={
    code(){
      console.log(`${this.identity} is coding.`)
    }
  }

  const canReview = {
    review(){
      console.log(`${this.identity} is reviewing code.`)
    }
  }

  function Employee(identity){
    Programmer.call(this,identity)
    // composing the object with necessary functionalities
    Object.assign(this,canCode,canReview)//mixins
  }

  function Manager(identity){
    Employee.call(this,identity)
  }
  const employee=new Employee("Jannie")
  employee.code()
  employee.review()
  const manager=new Manager("Jenny")
  manager.code()
  manager.review()
}
useInheritance()

function Mixins(){
  function mixins(target,...sources){
    Object.assign(target,...sources)
  }

  const canEat={
    eat:function(){
      this.hunger--;
      console.log(`${this.identity} is eating.`)
    }
  }

  const canWalk={
    walk:function(){
      console.log(`${this.identity} is walking.`)
    }
  }

  const canCode={
    code:function(){
      console.log(`${this.identity} is coding.`)
    }
  }

  function Programmer(identity){
    this.identity=identity
    this.hunger=10
  }

  mixins(Programmer.prototype,canCode,canEat,canWalk)

  const person=new Programmer("Jammie")
  person.walk()
  person.eat()

}
Mixins()





