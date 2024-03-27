
import express from "express"
import taskRouter from "/Users/mac/Desktop/VscodeProject/depinWeb3/serverWeb3/routes/task"

const app =express();

app.use("/api/task", taskRouter);

app.listen(3000,()=>{

    console.log("server start")
})