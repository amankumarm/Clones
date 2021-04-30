const app=require('express')()
app.get('/',(req,res)=>{
    res.send(__dirname+'index.html')
})
app.listen(3000)