// api ko lagi fetch key use garinxa ra api promise ho so call back function dinxa ra 
// .then ra .catch use hunxa
const data=fetch("https://api.github.com/users/Amanchaudary")
console.log(data)
let res=data.then(Response=>Response.json())
console.log(res)
const aman=res.then(data=>{
    console.log(data)
    document.querySelector('img').src=data.avatar_url
})