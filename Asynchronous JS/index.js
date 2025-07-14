//Callbacks
console.log("Before")
// getGroceryItem(1, (groceryItem) => {
//  console.log(groceryItem)
// })
console.log("after")

getGroceryList(1,(grocery)=>{
 console.log('Grocery List:',grocery)
 getGroceryItem(grocery.id,(items)=>{
  console.log('Items:',items)
 })
})

function getGroceryList(id,callback){
 setTimeout(()=>{
  console.log('Fetching grocery list from the Database...')
  callback({id:id,items:['apples','bananas','bread']})
 },2000)
}
function getGroceryItem(id, callback) {
 setTimeout(() => {
  console.log("Reading the grocery Item from the Database...")
  console.log("Displaying the details:")
  callback(['apples','bananas','bread'])
 },3000)
}
