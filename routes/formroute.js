import { Router } from "express";
import {
    addform,
    editform,
    deleteform,
    getAllForms
} from "../controllers/formController.js";

export const addFormRoute = Router().post("/", addform);
export const editFormRoute = Router().put("/:id", editform);
export const deleteFormRoute = Router().delete("/:id", deleteform);
export const getallFormsroute = Router().get("/", getAllForms);