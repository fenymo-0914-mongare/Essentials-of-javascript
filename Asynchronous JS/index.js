getGroceryList(1)
 .then(list=>getGroceryItem(list.id))
 .then(items=>checkAvailability(items[0]))
 .then(availability=>console.log("Availability",availability))
 .catch(err=>console.error(err))


function getGroceryList(id){
  return new Promise((resolve)=>{
   setTimeout(()=>{
  console.log('Fetching grocery list from the Database...')
  resolve({id:id,items:['apples','bananas','bread']})
 },2000)
  })
}
function getGroceryItem(id) {
 return new Promise((resolve)=>{
  setTimeout(() => {
  console.log("Reading the grocery Item from the Database...");
  // Simulate fetching item by id (for demonstration, just return the item at index id)
  const items = ['apples', 'bananas', 'bread'];
  if (typeof id === 'number' && id >= 0 && id < items.length) {
    resolve([items[id]]);
  }},2000)
 })
 }
function checkAvailability(item){
 return new Promise((resolve)=>{
  setTimeout(()=>{
  console.log(`Checking availability of the item in the store`);
  resolve(true) 
 },2000);
 })
 
}



