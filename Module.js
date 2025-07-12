class Programmer{
 constructor(name,language){
  this.name=name
  this.language=language
 }
 code(){
  console.log(`${this.name} is programming in ${this.language}`)
 }
}
// module.exports = { Programmer }

const programmerSkills=new WeakMap()

export function setSkills(programmer,skills){
 programmerSkills.set(programmer,skills)
}

export function getSkills(programmer){
 return programmerSkills.get(programmer)
}