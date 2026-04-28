import Employee from "../models/emp_models.js";

async function handlegetAllEmp(req,res) {

    try {
        let allEmp = await Employee.find({})

        if(allEmp === 0){

            return res.status(404).json({
                success : false,
                message : "unable to fetch employees",
            })
        }

        res.status(200).json({ 
            success : true,
            message : "Fetched all employees",
            data : allEmp
        })        
    } catch (error) {
         res.status(500).json({
            success : false,
            message : "something went wrong",
           
        })
    }
}

async function handleGetSingleEmp(req,res) {
    try {
        let empID = req.params.id
        let singleEmp = await Employee.findById(empID)

        if(!singleEmp){
            return res.status(404).json({
                success : false,
                message : "unable to fetch employee",
            })
        }

        res.status(200).json({ 
            success : true,
            message : "Fetched single employee",
            data : singleEmp
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wrong",
           
        })
    }
}
async function handleAddEmp(req,res) {
    try {
         
                const newEmployee = req.body
                let newlyCreatedEmployee = await Employee.create(newEmployee)
        
                if(!newlyCreatedEmployee){
                    return res.status(400).json({
                        success : false,
                        message: "unable to create an employee"
                    })
                }
        
                res.status(200).json({
                    success : true, 
                    message : "Employee added",
                    data : newlyCreatedEmployee,
                })
        
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wrong",
           
        })
    }
}
async function handleUpdateEmp(req,res) {
    try {
        const empID = req.params.id 
        const updatedEmpData = req.body
        
        let updatedEmp = await Employee.findByIdAndUpdate(empID, updatedEmpData, {new : true})
        
        if(!updatedEmp){    
            return res.status(400).json({
                success : false,
                message: "unable to update employee"
            })
        }
        
        res.status(200).json({
            success : true, 
            message : "Employee updated",
            data : updatedEmp,
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wrong",
           
        })
    }
}
async function handleDeleteEmp(req,res) {
    try {
        const empID = req.params.id
        let deletedEmp = await Employee.findByIdAndDelete(empID)

        if(!deletedEmp){
            return res.status(400).json({
                success : false,
                message: "unable to delete employee"
            })
        }

        res.status(200).json({
            success : true, 
            message : "Employee deleted",
            data : deletedEmp,
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : "something went wrong",
           
        })
    }
}


export {
    handlegetAllEmp,
    handleGetSingleEmp,
    handleAddEmp,
    handleUpdateEmp,
    handleDeleteEmp
}