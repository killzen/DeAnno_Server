import moment from "moment";
import workerData from "../datas/workerDate.js"

export const getWorkerDetail = (req, res) => {
    const workid=req.query.workid;
    //const data = JSON.parse(data);
    const rsData = workerData.filter(item => item.userid == workid);
    return res.status(200).json(rsData);
}
