import moment from "moment";
import { db } from "../connect.js"

export const getWorkerDetail = (req, res) => {
    const workid=req.query.workid;
    const q = `SELECT * FROM worker WHERE id = ? `;
  
    db.query(q, [workid], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });
      console.log(data);
      return res.status(200).json(data);
    });
}
