
function asycFunction(){
  let stock={
    fruits:['apples','bananas','strawberry','oranges','mangoes'],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  }
  // let order=(call_production)=>{
  //   setTimeout(() => {
  //     console.log('order received, proced to production');
  //   }, 2000);
  //   setTimeout(() => {
  //     console.log('we are choosing some fruits');
  //   }, 4000);
  //   console.log(`${stock.fruits[0]} was selected`);
  //   call_production()
  // }
  // let production=()=>{
  //   setTimeout(() => {
  //     console.log('starting production now.Machine is ready to work');
  //   }, 5000);
  //   setTimeout(() => {
  //     console.log('We are adding water now');
  //     setTimeout(() => {
  //       console.log('choosing a container');
  //     }, 7000);
      
  //   }, 8000);  
  //}
  //order(production)
  
  let isShopOpen=true;
  let orders=(time,work)=>{
    return new Promise((resolve,reject)=>{
      if(isShopOpen===true){
        setTimeout(() => {
         resolve(work()) 
        }, time);
      }else{
        reject(console.log('Sorry!We are closed!'))
        isShopOpen===false
      }
    })
  }
  orders(1000,()=>console.log(`${stock.fruits[2]} was promised to be selected`))

  .then(()=>{
    return orders(500,()=>console.log('production has started')
    )
  })
  .then(()=>{
    return orders(2000,()=>{console.log(`we are adding ${stock.liquid[0]}`);
    })
  })
  .then(()=>{
    return orders(1000,()=>{console.log(`pouring to ${stock.holder[1]} and ${stock.toppings[0]}`);
    })
  })
  .then(()=>{
    return orders(1000,()=>{console.log('we are putting on the table')})
  })
  .catch(()=>{
    console.log('Customer left')
  })
  .finally(()=>{
    console.log('See you tomorrow, love you.')
  })
}
asycFunction()

function asyncWait(){
  let stock={
    fruits:['apples','bananas','strawberry','oranges','mangoes'],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  }

  let toppings=function(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(console.log('which topping do you like?')
        )
      },3000)
  })
  }
 async function order(){
  console.log('we are going to take a forgetten detail')
  await toppings()
  console.log('we got now we gotta work')  
 }
 order()
  
}

asyncWait()