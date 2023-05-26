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
exports.EvaluationController = void 0;
const tsoa_1 = require("tsoa");
const EvaluationDAO_1 = require("../../../mysql/models/EvaluationDAO");
const ProjectDAO_1 = require("../../../mysql/models/ProjectDAO");
let EvaluationController = class EvaluationController extends tsoa_1.Controller {
    getAllEvaluationForOneProject(idProjekta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EvaluationDAO_1.evaluationDAO.getAllEvaluationForOneProject(idProjekta);
        });
    }
    insertEvaluation(evaluation) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield EvaluationDAO_1.evaluationDAO.insertEvaluation(evaluation);
            yield ProjectDAO_1.projectDAO.editStatus(evaluation.statusProjekta, evaluation.idProjekta);
            return result;
        });
    }
    editEvaluation(evaluation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EvaluationDAO_1.evaluationDAO.editEvaluation(evaluation);
        });
    }
    deleteEvaluation(idEvaluacije) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EvaluationDAO_1.evaluationDAO.deleteEvaluation(idEvaluacije);
        });
    }
    editStatus(projekat) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EvaluationDAO_1.evaluationDAO.editStatus(projekat.status, projekat.idProjekta);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("getAllEvaluationForOneProject/{idProjekta}"),
    __param(0, (0, tsoa_1.Path)())
], EvaluationController.prototype, "getAllEvaluationForOneProject", null);
__decorate([
    (0, tsoa_1.Post)("insertEvaluation"),
    __param(0, (0, tsoa_1.Body)())
], EvaluationController.prototype, "insertEvaluation", null);
__decorate([
    (0, tsoa_1.Put)("editEvaluation"),
    __param(0, (0, tsoa_1.Body)())
], EvaluationController.prototype, "editEvaluation", null);
__decorate([
    (0, tsoa_1.Delete)("deleteEvaluation/{idEvaluacije}"),
    __param(0, (0, tsoa_1.Path)())
], EvaluationController.prototype, "deleteEvaluation", null);
__decorate([
    (0, tsoa_1.Put)("editStatus"),
    __param(0, (0, tsoa_1.Body)())
], EvaluationController.prototype, "editStatus", null);
EvaluationController = __decorate([
    (0, tsoa_1.Route)("evaluation")
], EvaluationController);
exports.EvaluationController = EvaluationController;
//# sourceMappingURL=EvaluationController.js.map