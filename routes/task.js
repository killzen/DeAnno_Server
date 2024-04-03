import express from "express"

import {getAllTasks,getTasksByWorker,claimTasksByWorker,getTask,submitTask } from "../controller/task.js"

const router = express.Router();

router.get('/allTask',getAllTasks);
router.get('/getTask',getTask);
router.get('/byWorkerTask',getTasksByWorker);

router.post('/claimTask',claimTasksByWorker);
router.post('/submitTask',submitTask);

export default router;