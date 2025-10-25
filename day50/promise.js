// reselve pani auta void function ho
// const resolve=()=>{}
const p1=new Promise((resolve,reject)=>{
    let error=true
  if(!error){
    resolve("ok")
  }
  else{
    reject("sumimasen tyotto")
  }
})
// asari call garna hudain asle promise show garxa ra waiting show garxa
// console.log(p1)

// call garne tarika
p1.then((result)=>(console.log(result))).catch(error=>console.log(error))

