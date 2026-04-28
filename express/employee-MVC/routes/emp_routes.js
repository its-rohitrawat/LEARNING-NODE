import express from "express";

import {
    handlegetAllEmp,
    handleGetSingleEmp,
    handleAddEmp,
    handleUpdateEmp,
    handleDeleteEmp
} from "../controllers/employee_controller.js"  

const router = express.Router()

//! routes related to employee

router.get("/all-emp", handlegetAllEmp)
router.get("/emp/:id", handleGetSingleEmp)
router.post("/add-emp", handleAddEmp)
router.delete("/delete-emp/:id", handleDeleteEmp)
router.put("/update-emp/:id", handleUpdateEmp)

export default router;

