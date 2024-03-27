
import express from "express"
import taskRouter from "./routes/task"

const app =express();

app.use("/api/task", taskRouter);

app.listen(3000,()=>{

    console.log("server start")
})