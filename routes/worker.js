import express from "express"
import {getWorkerDetail} from "../controller/worker.js"


const router = express.Router();

router.get('/getDetail',getWorkerDetail);


export default router;