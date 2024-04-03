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
    const workid=req.query.workid;
    const id=req.query.id;
    const q = `update task set userid= ? WHERE id = ? `;

    querySQL(q, [workid,id], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json("领取成功");
    });
  
}

//submit & Complete
export const submitTask = (req, res) => {
  const workid=req.query.workid;
  const id=req.query.id;
  const q = `update task set state= '2' WHERE userid = ? and id = ? `;

  querySQL(q, [workid,id], (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(data);
    return res.status(200).json("提交成功");
  });

  //The execution is delayed by 5 seconds
  setTimeout(() => {
    const audit = `update task set state= '3' WHERE userid = ? and id = ? `;

    querySQL(audit, [workid,id], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json("已完成");
    });
  }, 5000);

  
}