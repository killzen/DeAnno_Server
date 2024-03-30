import express from "express"
import data from "./datas/taskData.js"
const app =express();

import taskRouter from "./routes/task.js"
import workerRouter from "./routes/worker.js"


app.use("/api/task", taskRouter);
app.use("/api/worker", workerRouter);

app.listen(3000,()=>{

    console.log("server start");
    //console.log(data);
})