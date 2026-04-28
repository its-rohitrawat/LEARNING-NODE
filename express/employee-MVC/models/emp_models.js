import mongoose  from "mongoose";

const empSchema = new mongoose.Schema({
    Emp_Username : {
        type : String,
        required : [true, "Please provide employee username"],
        trim : true,
        maxLength : [50, "Employee username cannot exceed 50 characters"]
    },

    Emp_Email : {
        type : String,
        required : [true, "Please provide employee email"],
        trim : true,
        maxLength : [50, "Employee email cannot exceed 50 characters"]
    },
    Emp_Password : {
        type : String,
        required : [true, "Please provide a Password"],
        trim : true,
        maxLength : [20, "Password cannot exceed 20 characters"]
    },
    Emp_Age : {
        type : Number,
        required : [true, "Please enter your age"],
        min : [18, "Age cannot be less than 18"],


    },
    Emp_Designation : {
        type : String,
        required : [true, "Please provide your designation"],
        trim : true,
        maxLength : [50, "Designation cannot exceed 50 characters"]
    }
})

export default mongoose.model("employee", empSchema) //we are exporting the model with the name employee and the schema is empSchema