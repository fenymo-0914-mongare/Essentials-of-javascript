
export class Programmer{
 role='Developer'
 #experience
 constructor(name,tech,experience){
  this.name=name
  this.tech=tech
  this.#experience=experience
 }
 develop(){
  console.log(`${this.name} develops software using ${this.tech} with ${this.#experience} years of experience.`)
 }
 getExperience(){
  return this.#experience
 }
}