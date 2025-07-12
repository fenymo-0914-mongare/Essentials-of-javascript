//The Principle of Cohesion -
// How closely related and focused the responsibilities of a single module
// for better code maintainability and understanding
import { setSkills,getSkills } from './Module.js'
// const { Programmer }= require ('./Module.js')
// const prog=new Programmer('Marcus',"Ruby")
// prog.code()

class Programmer{
 constructor(name,skills){
  this.name=name
  setSkills(this,skills)
 }
 code(){
  console.log(`${this.name} is coding in ${getSkills(this)}`)
 }
}

export default Programmer