import express from "express"
import data from "./datas/taskData.js"
const app =express();

import taskRouter from "./routes/task.js"
import workerRouter from "./routes/worker.js"
import cors from "cors"
import bodyParser  from "body-parser"

 
app.use(bodyParser.json());

 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(cors());

app.use("/api/task", taskRouter);
app.use("/api/worker", workerRouter);

app.listen(5000,'192.168.184.188',()=>{

    console.log("server start");
    //console.log(data);
})