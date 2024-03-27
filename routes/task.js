import express, { Router } from "express"

import {getAllTasks,getTasksByWorker } from "../controller/task"

const router = express.Router();

router.get('/allTask',getAllTasks);
router.post('/byWorkerTask:id',getTasksByWorker);

export default router;