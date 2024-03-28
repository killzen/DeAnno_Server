import moment from "moment";
import data from "../datas/taskData.js"


export const getAllTasks = (req, res) => {
    const rsData = data.filter(item => item.userid == "");
    return res.status(200).json(rsData);
}

export const getTasksByWorker = (req, res) => {
    const workid=req.query.workid;
    //const data = JSON.parse(data);
    console.log(workid);
    
    const rsData = data.filter(item => item.userid == workid);     
    return res.status(200).json(rsData);
  
}


export const claimTasksByWorker = (req, res) => {
    const workid=req.query.workid;
    const updatedData = data.map(item => {
        if (item.taskName === "任务1") {
            return { ...item, userid: "1" };  // 更新 userid 属性为 "1"
        } else {
            return item;
        }
    });
    const rsData = data.filter(item => item.userid == workid);     
    return res.status(200).json("领取成功");
  
}
