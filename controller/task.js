import moment from "moment";
import { db } from "../connect.js"


export const getAllTasks = (req, res) => {
    const q = `SELECT * FROM task WHERE userid is ? `;
  
    db.query(q, [null], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json(data);
    });
  };


export const getTasksByWorker =   (req, res) => {
    const workid=req.query.workid;
    const q = `SELECT * FROM task WHERE userid = ? `;
  
    db.query(q, [workid], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json(data);
    });
     
}


export const claimTasksByWorker = (req, res) => {
    const workid=req.query.workid;
    // const updatedData = data.map(item => {
    //     if (item.taskName === "任务1") {
    //         return { ...item, userid: "1" };  // 更新 userid 属性为 "1"
    //     } else {
    //         return item;
    //     }
    // });
    // const rsData = data.filter(item => item.userid == workid);     
    return res.status(200).json("领取成功");
  
}
