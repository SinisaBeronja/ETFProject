import { Body, Controller, Get, Post, Route } from "tsoa";
import { Project } from "../../../mysql/models/Project";
import { projectDAO } from "../../../mysql/models/ProjectDAO";


@Route("project")
export class ProjectController extends Controller{

   
    @Get("getAllProjects")
    async getAllProjects() {
        return await projectDAO.getAllProjects();
    }

    @Post("insertProject")
    async insertProject(@Body() project: Project){
        return await projectDAO.insertProject(project);
    }

}
