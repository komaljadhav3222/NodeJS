
var express = require('express');
var router = express.Router();
const app = express()

//HTTP Methods
/* GET */
router.get('/', function(req, res) {
 res.send('Welcome To Login!!');
});
/* POST */
app.post('/ValidateUser',(req,res)=>{
    console.log(req.body)
    const{UserName,Password}=req.body;  

if(UserName==="Komal"&& Password==="12345678"){
    res.send("Login Successful...")
}else{
    res.send("Invalid username or password")
}
})
/* DELETE */
app.delete('/',(req,res)=>{
res.send('DELETE request to the Login')
})
/* PUT */
app.put('/',(req,res)=>{
res.send('PUT request to the Login')
})
module.exports = router;