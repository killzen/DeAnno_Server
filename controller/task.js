import moment from "moment";
import querySQL from "../connect.js"


export const getAllTasks = (req, res) => {
    const q = `SELECT * FROM task WHERE userid is ? `;
  
    querySQL(q, [null], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json(data);
    });
  };


export const getTask =   (req, res) => {
    const id=req.query.id;
    const q = `SELECT * FROM task WHERE id = ? `; 
    querySQL(q, [workid], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json(data);
    });
     
}

export const getTasksByWorker =   (req, res) => {
    const workid=req.query.workid;
    const q = `SELECT * FROM task WHERE userid = ? `;
  
    querySQL(q, [workid], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json(data);
    });     
}


export const claimTasksByWorker = (req, res) => {
    const {workid,id}=  req.body;
    console.log(workid);
    const q = "update task set `userid`= ?,state= '1' WHERE id = ? ";

    querySQL(q, [parseInt(workid),parseInt(id)], (err, data, sql) => {
      if (err) return res.status(500).json({ error: err.message });
      if (data.affectedRows > 0) return res.json("领取成功!");
      return res.status(403).json("领取失败!");
    });
  
}

//submit & Complete
export const submitTask = (req, res) => {
  const {workid,id}=  req.body;
  console.log(workid);
  
  const q = `update task set state= '2' WHERE userid = ? and id = ? `;

  querySQL(q, [parseInt(workid),parseInt(id)], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(data);
    if (data.affectedRows > 0) return res.json("提交成功!");
    return res.status(403).json("提交失败!");
  });
}


//The execution is delayed by 5 seconds
export const completeTask = (req, res) => {
  const {workid,id}=  req.body;
  console.log(workid);
  const audit = "update task set state= '3' WHERE userid = ? and id = ? ";

  querySQL(audit, [parseInt(workid),parseInt(id)], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(data);
    if (data.affectedRows > 0) return res.json("已完成!");
    return res.status(403).json("未完成!");
  });
 


}