"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const EvaluationController_1 = require("./../../routes/Evaluation/EvaluationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const InstitutionController_1 = require("./../../routes/institution/InstitutionController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const OblastController_1 = require("./../../routes/oblast/OblastController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ProjectController_1 = require("./../../routes/project/ProjectController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const SalesController_1 = require("./../../routes/sales/SalesController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const UserController_1 = require("./../../routes/users/UserController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "Evaluation": {
        "dataType": "refObject",
        "properties": {
            "idEvaluacije": { "dataType": "double", "required": true },
            "datumEvaluacije": { "dataType": "string", "required": true },
            "sugestije": { "dataType": "string", "required": true },
            "primedbe": { "dataType": "string", "required": true },
            "zahtevi": { "dataType": "string", "required": true },
            "statusProjekta": { "dataType": "string", "required": true },
            "obrazlozenje": { "dataType": "string", "required": true },
            "idProjekta": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Institution": {
        "dataType": "refObject",
        "properties": {
            "idInstitucije": { "dataType": "double", "required": true },
            "nazivInstSrp": { "dataType": "string", "required": true },
            "nazivInstEng": { "dataType": "string", "required": true },
            "nazivSkrInst": { "dataType": "string", "required": true },
            "adresaInst": { "dataType": "string", "required": true },
            "gradInst": { "dataType": "string", "required": true },
            "ovlascenoLiceInst": { "dataType": "string", "required": true },
            "telefonInst": { "dataType": "string", "required": true },
            "sifraInstitucije": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Oblast": {
        "dataType": "refObject",
        "properties": {
            "idOblasti": { "dataType": "double", "required": true },
            "nazivOblasti": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Project": {
        "dataType": "refObject",
        "properties": {
            "idProjekta": { "dataType": "double", "required": true },
            "nazivProjekta": { "dataType": "string", "required": true },
            "datumProjekta": { "dataType": "string", "required": true },
            "akronim": { "dataType": "string", "required": true },
            "apstraktSrp": { "dataType": "string", "required": true },
            "apstraktEng": { "dataType": "string", "required": true },
            "ukupanBudzet": { "dataType": "double", "required": true },
            "snimanjeProjekta": { "dataType": "string", "required": true },
            "podprogram": { "dataType": "string", "required": true },
            "ime": { "dataType": "string", "required": true },
            "prezime": { "dataType": "string", "required": true },
            "idRukovodioca": { "dataType": "double", "required": true },
            "nazivInstSrp": { "dataType": "string", "required": true },
            "projekatInst1": { "dataType": "double", "required": true },
            "projekatInst2": { "dataType": "double", "required": true },
            "projekatInst3": { "dataType": "double", "required": true },
            "projekatInst4": { "dataType": "double", "required": true },
            "projekatInst5": { "dataType": "double", "required": true },
            "projekatOblast1": { "dataType": "double", "required": true },
            "projekatOblast2": { "dataType": "double", "required": true },
            "projekatOblast3": { "dataType": "double", "required": true },
            "projekatOblast4": { "dataType": "double", "required": true },
            "projekatOblast5": { "dataType": "double", "required": true },
            "status": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Sale": {
        "dataType": "refObject",
        "properties": {
            "id2": { "dataType": "double", "required": true },
            "date": { "dataType": "datetime", "required": true },
            "description": { "dataType": "string", "required": true },
            "delivery_adress": { "dataType": "string", "required": true },
            "delivery_phone": { "dataType": "string", "required": true },
            "amount": { "dataType": "double", "required": true },
            "payment_type": { "dataType": "string", "required": true },
            "idu": { "dataType": "double", "required": true },
            "idc": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "idRukovodioca": { "dataType": "double", "required": true },
            "username": { "dataType": "string", "required": true },
            "lozinka": { "dataType": "string", "required": true },
            "ime": { "dataType": "string", "required": true },
            "prezime": { "dataType": "string", "required": true },
            "datumRodjenja": { "dataType": "string", "required": true },
            "mailRukovodioca": { "dataType": "string", "required": true },
            "telefon": { "dataType": "string", "required": true },
            "pregledPodnetih": { "dataType": "string", "required": true },
            "idInstitucije": { "dataType": "double", "required": true },
            "nazivInstSrp": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/evaluation/getAllEvaluationForOneProject/:idProjekta', ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController)), ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController.prototype.getAllEvaluationForOneProject)), function EvaluationController_getAllEvaluationForOneProject(request, response, next) {
        const args = {
            idProjekta: { "in": "path", "name": "idProjekta", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new EvaluationController_1.EvaluationController();
            const promise = controller.getAllEvaluationForOneProject.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/evaluation/insertEvaluation', ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController)), ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController.prototype.insertEvaluation)), function EvaluationController_insertEvaluation(request, response, next) {
        const args = {
            evaluation: { "in": "body", "name": "evaluation", "required": true, "ref": "Evaluation" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new EvaluationController_1.EvaluationController();
            const promise = controller.insertEvaluation.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/evaluation/editEvaluation', ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController)), ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController.prototype.editEvaluation)), function EvaluationController_editEvaluation(request, response, next) {
        const args = {
            evaluation: { "in": "body", "name": "evaluation", "required": true, "ref": "Evaluation" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new EvaluationController_1.EvaluationController();
            const promise = controller.editEvaluation.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/evaluation/deleteEvaluation/:idEvaluacije', ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController)), ...((0, runtime_1.fetchMiddlewares)(EvaluationController_1.EvaluationController.prototype.deleteEvaluation)), function EvaluationController_deleteEvaluation(request, response, next) {
        const args = {
            idEvaluacije: { "in": "path", "name": "idEvaluacije", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new EvaluationController_1.EvaluationController();
            const promise = controller.deleteEvaluation.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/institution/getAllInstitution', ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController)), ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController.prototype.getAllInstitution)), function InstutionController_getAllInstitution(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new InstitutionController_1.InstutionController();
            const promise = controller.getAllInstitution.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/institution', ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController)), ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController.prototype.insertInstitution)), function InstutionController_insertInstitution(request, response, next) {
        const args = {
            institution: { "in": "body", "name": "institution", "required": true, "ref": "Institution" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new InstitutionController_1.InstutionController();
            const promise = controller.insertInstitution.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/institution/editInstitution', ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController)), ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController.prototype.editInstitution)), function InstutionController_editInstitution(request, response, next) {
        const args = {
            institution: { "in": "body", "name": "institution", "required": true, "ref": "Institution" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new InstitutionController_1.InstutionController();
            const promise = controller.editInstitution.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/institution/deleteInstitution/:idInstitucije', ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController)), ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController.prototype.deleteInstitution)), function InstutionController_deleteInstitution(request, response, next) {
        const args = {
            idInstitucije: { "in": "path", "name": "idInstitucije", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new InstitutionController_1.InstutionController();
            const promise = controller.deleteInstitution.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/institution/search/:idInstitucije', ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController)), ...((0, runtime_1.fetchMiddlewares)(InstitutionController_1.InstutionController.prototype.searchInstitution)), function InstutionController_searchInstitution(request, response, next) {
        const args = {
            idInstitucije: { "in": "path", "name": "idInstitucije", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new InstitutionController_1.InstutionController();
            const promise = controller.searchInstitution.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/oblast/getAllOblast', ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController)), ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController.prototype.getAllOblast)), function OblastController_getAllOblast(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new OblastController_1.OblastController();
            const promise = controller.getAllOblast.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/oblast', ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController)), ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController.prototype.insertOblast)), function OblastController_insertOblast(request, response, next) {
        const args = {
            oblast: { "in": "body", "name": "oblast", "required": true, "ref": "Oblast" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new OblastController_1.OblastController();
            const promise = controller.insertOblast.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/oblast/editOblast', ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController)), ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController.prototype.editOblast)), function OblastController_editOblast(request, response, next) {
        const args = {
            oblast: { "in": "body", "name": "oblast", "required": true, "ref": "Oblast" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new OblastController_1.OblastController();
            const promise = controller.editOblast.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/oblast/deleteOblast/:idOblasti', ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController)), ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController.prototype.deleteOblast)), function OblastController_deleteOblast(request, response, next) {
        const args = {
            idOblasti: { "in": "path", "name": "idOblasti", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new OblastController_1.OblastController();
            const promise = controller.deleteOblast.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/oblast/search/:idOblasti', ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController)), ...((0, runtime_1.fetchMiddlewares)(OblastController_1.OblastController.prototype.searchOblast)), function OblastController_searchOblast(request, response, next) {
        const args = {
            idOblasti: { "in": "path", "name": "idOblasti", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new OblastController_1.OblastController();
            const promise = controller.searchOblast.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/project/getAllProjects', ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController)), ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController.prototype.getAllProjects)), function ProjectController_getAllProjects(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ProjectController_1.ProjectController();
            const promise = controller.getAllProjects.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/project/getAllProjectsUser/:idRukovodioca', ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController)), ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController.prototype.getAllProjectsUser)), function ProjectController_getAllProjectsUser(request, response, next) {
        const args = {
            idRukovodioca: { "in": "path", "name": "idRukovodioca", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ProjectController_1.ProjectController();
            const promise = controller.getAllProjectsUser.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/project/insertProject', ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController)), ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController.prototype.insertProject)), function ProjectController_insertProject(request, response, next) {
        const args = {
            project: { "in": "body", "name": "project", "required": true, "ref": "Project" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ProjectController_1.ProjectController();
            const promise = controller.insertProject.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/project/GetOneProject/:idProjekta', ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController)), ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController.prototype.GetOneProject)), function ProjectController_GetOneProject(request, response, next) {
        const args = {
            idProjekta: { "in": "path", "name": "idProjekta", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ProjectController_1.ProjectController();
            const promise = controller.GetOneProject.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/project/promeniProjectStatus', ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController)), ...((0, runtime_1.fetchMiddlewares)(ProjectController_1.ProjectController.prototype.editProjectStatus)), function ProjectController_editProjectStatus(request, response, next) {
        const args = {
            project: { "in": "body", "name": "project", "required": true, "ref": "Project" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new ProjectController_1.ProjectController();
            const promise = controller.editProjectStatus.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/sales/getAllSales', ...((0, runtime_1.fetchMiddlewares)(SalesController_1.SalesController)), ...((0, runtime_1.fetchMiddlewares)(SalesController_1.SalesController.prototype.getAllSales)), function SalesController_getAllSales(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new SalesController_1.SalesController();
            const promise = controller.getAllSales.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/users/login', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.login)), function UserController_login(request, response, next) {
        const args = {
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.login.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/users/register', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.register)), function UserController_register(request, response, next) {
        const args = {
            user: { "in": "body", "name": "user", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.register.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/users/getAllUsers', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getAllUsers)), function UserController_getAllUsers(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.getAllUsers.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/users/editUser', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.editUser)), function UserController_editUser(request, response, next) {
        const args = {
            korisnik: { "in": "body", "name": "korisnik", "required": true, "ref": "User" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new UserController_1.UserController();
            const promise = controller.editUser.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map