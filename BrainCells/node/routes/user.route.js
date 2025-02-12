import express from "express";
import { fetchUsers, getAllUsers } from "../controller/user.controller.js";

const Userroutes = express.Router();

Userroutes.get("/getdata", fetchUsers);

Userroutes.get("/users", getAllUsers);

export default Userroutes;