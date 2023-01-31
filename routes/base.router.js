import express from "express";
const router = express.Router();

import employeeRouter from "./employee.routes.js"; //^ EMPLOYEE Router
import employerRouter from "./employer.routes.js"; //^ EMPLOYER Router

//@ Employee Router
router.use("/employee", employeeRouter);

//@ Employer Router
router.use("/employer", employerRouter);

export default router;
