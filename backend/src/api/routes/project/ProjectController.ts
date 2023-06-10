import { Body, Controller, Delete, Get, Path, Post, Put, Route } from "tsoa";
import { Project } from "../../../mysql/models/Project";
import { projectDAO } from "../../../mysql/models/ProjectDAO";


@Route("project")
export class ProjectController extends Controller{

   
    @Get("getAllProjects")
    async getAllProjects() {
        return await projectDAO.getAllProjects();
    }

    @Get("getAllProjectsUser/{idRukovodioca}")
    async getAllProjectsUser(@Path() idRukovodioca: number):Promise<Project | null> {
        return await projectDAO.getAllProjectsUser(idRukovodioca);
    }

    @Post("insertProject") 
    async insertProject(@Body() project: Project){
        return await projectDAO.insertProject(project);
    }

    @Get("GetOneProject/{idProjekta}")
    async GetOneProject(@Path() idProjekta: number):Promise<Project | null>{
        return await projectDAO.GetOneProject(idProjekta)
    }

    // ovu ne koristimo
    @Post("editProjectStatus") 
    async editProjectStatus(@Body() project: Project) {
        return await projectDAO.editProjectStatus(project); 
    }
    
    // ovu pozivamo iz evaluation Controller isto ne koristimo
    @Put("editStatus") 
    async editStatus(@Body() projekat: Project) {
        return await projectDAO.editStatus(projekat.status, projekat.idProjekta); 
    }

    @Delete("deleteProjectFirstPage/{nazivProjekta}") 
    async deleteProjectFirstPage(@Path() nazivProjekta: string){
        return await projectDAO.deleteProjectFirstPage(nazivProjekta); 
    }

    @Put("editOneProject")
    async editOneProject(@Body() projekat: Project) {
        return await projectDAO.editOneProject(projekat);
    }
   
    @Put("projectUpdate") 
    async projectUpdate(@Body() projekat: Project) {
        return await projectDAO.projectUpdate(projekat);
    }

}
