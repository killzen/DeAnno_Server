import express from "express"

import {getAllTasks,getTasksByWorker,claimTasksByWorker } from "../controller/task.js"

const router = express.Router();

router.get('/allTask',getAllTasks);
router.get('/byWorkerTask',getTasksByWorker);

router.post('/claimTask',claimTasksByWorker);

export default router;