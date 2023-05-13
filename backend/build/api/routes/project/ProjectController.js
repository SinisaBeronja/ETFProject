"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const tsoa_1 = require("tsoa");
const ProjectDAO_1 = require("../../../mysql/models/ProjectDAO");
let ProjectController = class ProjectController extends tsoa_1.Controller {
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProjectDAO_1.projectDAO.getAllProjects();
        });
    }
    getAllProjectsUser(idRukovodioca) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProjectDAO_1.projectDAO.getAllProjectsUser(idRukovodioca);
        });
    }
    insertProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProjectDAO_1.projectDAO.insertProject(project);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("getAllProjects")
], ProjectController.prototype, "getAllProjects", null);
__decorate([
    (0, tsoa_1.Get)("getAllProjectsUser/{idRukovodioca}"),
    __param(0, (0, tsoa_1.Path)())
], ProjectController.prototype, "getAllProjectsUser", null);
__decorate([
    (0, tsoa_1.Post)("insertProject"),
    __param(0, (0, tsoa_1.Body)())
], ProjectController.prototype, "insertProject", null);
ProjectController = __decorate([
    (0, tsoa_1.Route)("project")
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=ProjectController.js.map