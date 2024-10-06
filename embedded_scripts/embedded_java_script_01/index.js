// getDay() method
import express from "express";
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
app.get('/',(req,res)=>{
    const today = new Date();
    const day = today.getDay();
    let type = "a weekday";
    let adv = "time to work";
    if(day === 0 || day === 6){
        type = "the weekend";
        adv = "it's time to relax"
    }
    console.log(day);
    res.render("index.ejs",{dayType: type, advice: adv,});
});