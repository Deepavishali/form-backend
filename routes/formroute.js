import {Router} from "express";
import {
    addform,
    editform,
    deleteform,
    getAllForms
} from "../controllers/formController.js";

export const addFormRoute = Router().post("/",addform);
export const editFormRoute = Router().put("/",editform);
export const deleteFormRoute = Router().delete("/",deleteform);
export const getallFormsroute=Router().get("/",getAllForms);