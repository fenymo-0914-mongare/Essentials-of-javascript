
function FirstES6(){
 class Programmer{
   constructor(identity,language){
    this.identity=identity
    this.language=language
   }
   code(){
    console.log(`${this.identity} loves learning ${this.language} everyday.`)
   }
 }
 const prog=new Programmer("Mickey","JS")
 prog.code()

 class GroceryItem{
  constructor(name,quantity){
    this.name=name
    this.quantity=quantity
  }
  display(){
    console.log(`Name:${this.name} Quantity${this.quantity}`)
  }
 }

 const item=new GroceryItem("Apple",6)
 item.display()
}
FirstES6()

function StaticMethods(){
  class Programmer{
    constructor(name,language){
      this.name=name
      this.language=language
    }
    code(){
      console.log(`${this.name} is coding in frontend language:${this.language}`)
    }
    static compare(prog,progI){
      return prog.language === progI.language
    }
  }

  const programmer= new Programmer("Jammie","Ruby")
  programmer.code()
  const programmerI= new Programmer("Jammie","Rust")
  programmerI.code()
  console.log(Programmer.compare(programmer,programmerI))

  class GroceryItem{
    constructor(name,quantity){
      this.name=name
      this.quantity=quantity
    }
    Quantity(){
      console.log(`${this.name} has ${this.quantity}`)
    }

    static Large(itemI, itemII) {
      if (itemI.quantity > itemII.quantity) {
        return (`${itemI.name}:${itemI.quantity} has more Quantity.`)
      } else if (itemII.quantity > itemI.quantity) {
        return (`${itemII.name}:${itemII.quantity} has more Quantity.`)
      } else if (itemI.quantity === itemII.quantity) {
        return (`Both have equal quantity of ${itemI.quantity}`)
      }
    }
  }
  const item1=new GroceryItem("Apple",1)
  const item2=new GroceryItem("Berry",19)

  console.log(GroceryItem.Large(item1, item2))
} 
StaticMethods()

function useThis(){
  //when detaching the method from its object it losses its original reference
  //by pinting to global object like window in browsers
  //strict mode ensures this keyword is not accidentally pointing to global object
  'use strict'
  function programmer(name){
    this.name=name
    this.code=()=>{
      console.log(this)
    }
  }
  const prog=new programmer("Hart")
  prog.code()

  const detachCode=prog.code
  detachCode()
}

useThis()

function PrivateMembers(){
  // using symbol
  const _name=Symbol()
  const _code=Symbol()
  class Programmer{
    constructor(name,language){
      //use underscore for naming convention
      this._language=language
      //More private but accessible thru reflection
      this[_name]=name
    }
    [_code](){
      console.log(`${this[_name]} is coding ${this._language}`)
    }
  }
  const prog=new Programmer("Aimee","JS")
  console.log(prog._language)
  const nameSymbol=Object.getOwnPropertySymbols(prog)[0]
  console.log(prog[nameSymbol])

  //Truly private members using octoThorpe(#)
  
  class Grocery{
    #itemQuantity
    constructor(itemName,itemQuantity){
      this.itemName=itemName
      this.#itemQuantity=itemQuantity
    }
    #display() {
      console.log(`${this.itemName} has remained exactly ${this.#itemQuantity}`)
    }
    getItemQuantity() {
      return this.#itemQuantity;
    }
  }
  
  const item=new Grocery("Apples",'23')
  console.log(item);
  console.log(`Item Quantity: ${item.getItemQuantity()}`);
  
  //Sample
  class GroceryItems{
  #name
  #quantity
    constructor(name,quantity){
      this.#name=name
      this.#quantity=quantity
    }
    displayItem(){
      console.log(`Name:${this.#name}-Quantity:${this.#quantity}`)
    }
    getName() {
      return this.#name;
    }
    getDisplayString() {
      return `Name:${this.#name}-Quantity:${this.#quantity}`;
    }
  }
  class GroceryList{
    #items
    constructor(){
      this.#items=[]
    }
    addItem(name, quantity) {
      const item = new GroceryItems(name, quantity);
      this.#items.push(item);
    }
    removeItem(name){
      this.#items = this.#items.filter(item => {
        // Use a temporary variable to capture the name
        // Since #name is private, add a public getter
        return item.getName() !== name;
      });
    }
    displayList(){
      // Collect display strings in an array and join them
      return this.#items.map(item => {
        // Add a public getter for display string
        return item.getDisplayString();
      }).join('\n');
    }
  }

  const groceryItem= new GroceryList()
  groceryItem.addItem("Apples",9)

  console.log(groceryItem.displayList())
  function weakMap(){
    //Using WeakMap for private members
    const _language = new WeakMap();
    const _work = new WeakMap();
    class Programmer {
      constructor(name, language) {
        this.name = name;
        // Store private members in WeakMap
        _language.set(this, {language});

        _work.set(this,()=> {
        console.log(`${this.name} is coding in ${_language.get(this).language}`);
        })
      }
      code() {
        // Access private member from WeakMap
        _work.get(this)()
      }
    }
    const prog = new Programmer("Aimee", "JavaScript");
    prog.code();
  }
  weakMap()
  const privateProps=new WeakMap()
  class GroceryShop{
    constructor(name,quantity){
      privateProps.set(this,{
        name:name,
        quantity:quantity,
        work: (() => {
          console.log(`${name} has quantity ${quantity}`);
        })
      });
    }
    display(){
      privateProps.get(this).work();
    }
  }

  const GroceryItem=new GroceryShop("Apples",9)
  GroceryItem.display()
  // commonly used to maintain super API Boundaries
  //  enhance data encapsulation and security preventing data to accessed only inside the class
  // Weakmap prevent memory leaks by ensuring garbage collected with no reference
}

PrivateMembers()

function GettersSetters(){
  const _language = new WeakMap();
  const _work = new WeakMap();

  class Programmer {
    constructor(name, language) {
      this.name = name;
      _language.set(this, language);
    }
    //Getters
    get language(){
      return _language.get(this)
    }
    //Setters
    set language(newLanguage){
      if(!newLanguage) throw new Error("Language cannot be empty")
      _language.set(this,newLanguage)
    }
  }

  const prog = new Programmer("Carla", "JavaScript");
  console.log(prog.language)
  console.log(prog.language="Python")

}

GettersSetters()