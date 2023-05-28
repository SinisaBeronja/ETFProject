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
exports.FilesController = void 0;
const tsoa_1 = require("tsoa");
const FajloviDAO_1 = require("../../../mysql/models/FajloviDAO");
const ProjectDAO_1 = require("../../../mysql/models/ProjectDAO");
let FilesController = class FilesController extends tsoa_1.Controller {
    //@Get("getAllEvaluationForOneProject/{idProjekta}")
    //    async getAllEvaluationForOneProject(@Path() idProjekta: number):Promise<Evaluation | null>{
    //      return await evaluationDAO.getAllEvaluationForOneProject(idProjekta)
    //}
    insertEvaluation(fajlovi) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield FajloviDAO_1.fajloviDAO.insertFiles(fajlovi);
            // ovde treba da pozove projectDAO.editSnimanje da upise Predat u snimanjeProjekta
            yield ProjectDAO_1.projectDAO.editSnimanje(fajlovi.idProjekta);
            return result;
        });
    }
};
__decorate([
    (0, tsoa_1.Post)("insertFiles"),
    __param(0, (0, tsoa_1.Body)())
], FilesController.prototype, "insertEvaluation", null);
FilesController = __decorate([
    (0, tsoa_1.Route)("files")
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=FilesController.js.map