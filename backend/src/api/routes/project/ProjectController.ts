import { Body, Controller, Get, Post, Route } from "tsoa";
import { projectDAO } from "../../../mysql/models/ProjectDAO";


@Route("project")
export class ProjectController extends Controller{

   
    @Get("getAllProjects")
    async getAllProjects() {
        return await projectDAO.getAllProjects();
    }

}
