import moment from "moment";
import data from "../datas/data"
import { json } from "express";


export const getAllTasks = (req, res) => {
    return res.status(200).json(data);
}

export const getTasksByWorker = (req, res) => {
    const userId = req.query.userId;
       
    return res.status(200).json( JSON(data).status  );
  
}


