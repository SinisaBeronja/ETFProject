/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EvaluationController } from './../../routes/Evaluation/EvaluationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Field_namesController } from './../../routes/Field_names/Field_namesController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { FilesController } from './../../routes/Files/FilesController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { InstutionController } from './../../routes/institution/InstitutionController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OblastController } from './../../routes/oblast/OblastController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProjectController } from './../../routes/project/ProjectController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProjektizaizmenuController } from './../../routes/projektizaizmenu/ProjektizaizmenuController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SalesController } from './../../routes/sales/SalesController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../../routes/users/UserController';
import type { RequestHandler } from 'express';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Evaluation": {
        "dataType": "refObject",
        "properties": {
            "idEvaluacije": {"dataType":"double","default":0},
            "datumEvaluacije": {"dataType":"string","default":""},
            "sugestije": {"dataType":"string","default":""},
            "primedbe": {"dataType":"string","default":""},
            "zahtevi": {"dataType":"string","default":""},
            "statusProjekta": {"dataType":"string","default":""},
            "obrazlozenje": {"dataType":"string","default":""},
            "idProjekta": {"dataType":"double","default":0},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Project": {
        "dataType": "refObject",
        "properties": {
            "idProjekta": {"dataType":"double","default":0},
            "nazivProjekta": {"dataType":"string","default":""},
            "datumProjekta": {"dataType":"string","default":""},
            "akronim": {"dataType":"string","default":""},
            "apstraktSrp": {"dataType":"string","default":""},
            "apstraktEng": {"dataType":"string","default":""},
            "ukupanBudzet": {"dataType":"double","default":0},
            "snimanjeProjekta": {"dataType":"string","default":""},
            "podprogram": {"dataType":"string","default":""},
            "ime": {"dataType":"string","default":""},
            "prezime": {"dataType":"string","default":""},
            "idRukovodioca": {"dataType":"double","default":0},
            "nazivInstSrp": {"dataType":"string","default":""},
            "projekatInst1": {"dataType":"double","default":0},
            "projekatInst2": {"dataType":"double","default":0},
            "projekatInst3": {"dataType":"double","default":0},
            "projekatInst4": {"dataType":"double","default":0},
            "projekatInst5": {"dataType":"double","default":0},
            "projekatOblast1": {"dataType":"double","default":0},
            "projekatOblast2": {"dataType":"double","default":0},
            "projekatOblast3": {"dataType":"double","default":0},
            "projekatOblast4": {"dataType":"double","default":0},
            "projekatOblast5": {"dataType":"double","default":0},
            "status": {"dataType":"string","default":""},
            "idInstitucije": {"dataType":"double","default":0},
            "adresaInst": {"dataType":"string","default":""},
            "datumRodjenja": {"dataType":"string","default":""},
            "gradInst": {"dataType":"string","default":""},
            "lozinka": {"dataType":"string","default":""},
            "mailRukovodioca": {"dataType":"string","default":""},
            "nazivInstEng": {"dataType":"string","default":""},
            "ovlascenoLiceInst": {"dataType":"string","default":""},
            "pregledPodnetih": {"dataType":"string","default":""},
            "nazivSkrInst": {"dataType":"string","default":""},
            "sifraInstitucije": {"dataType":"string","default":""},
            "username": {"dataType":"string","default":""},
            "telefon": {"dataType":"string","default":""},
            "telefonInst": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Field_names": {
        "dataType": "refObject",
        "properties": {
            "idNazivi_polja": {"dataType":"double","default":0},
            "polje1": {"dataType":"string","default":""},
            "polje2": {"dataType":"string","default":""},
            "polje3": {"dataType":"string","default":""},
            "polje4": {"dataType":"string","default":""},
            "polje5": {"dataType":"string","default":""},
            "polje6": {"dataType":"string","default":""},
            "polje7": {"dataType":"string","default":""},
            "polje8": {"dataType":"string","default":""},
            "polje9": {"dataType":"string","default":""},
            "polje10": {"dataType":"string","default":""},
            "polje11": {"dataType":"string","default":""},
            "polje12": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Fajlovi": {
        "dataType": "refObject",
        "properties": {
            "idFajla": {"dataType":"double","default":0},
            "idProjekta": {"dataType":"double","default":0},
            "opisProjekta1": {"dataType":"string","default":""},
            "opisProjekta2": {"dataType":"string","default":""},
            "budzetProjekta": {"dataType":"string","default":""},
            "gantogramProjekta": {"dataType":"string","default":""},
            "prezentacijaProjekta": {"dataType":"string","default":""},
            "izjaveProjekta": {"dataType":"string","default":""},
            "biografijaProjekta": {"dataType":"string","default":""},
            "etickeSaglasnostiProjekta": {"dataType":"string","default":""},
            "uticajProjekta": {"dataType":"string","default":""},
            "pismaPodrske": {"dataType":"string","default":""},
            "biznisPlanProjekta": {"dataType":"string","default":""},
            "dodatnaDokumentacija": {"dataType":"string","default":""},
            "naziv": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Institution": {
        "dataType": "refObject",
        "properties": {
            "idInstitucije": {"dataType":"double","default":0},
            "nazivInstSrp": {"dataType":"string","default":""},
            "nazivInstEng": {"dataType":"string","default":""},
            "nazivSkrInst": {"dataType":"string","default":""},
            "adresaInst": {"dataType":"string","default":""},
            "gradInst": {"dataType":"string","default":""},
            "ovlascenoLiceInst": {"dataType":"string","default":""},
            "telefonInst": {"dataType":"string","default":""},
            "sifraInstitucije": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Oblast": {
        "dataType": "refObject",
        "properties": {
            "idOblasti": {"dataType":"double","default":0},
            "nazivOblasti": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProjektiZaIzmenu": {
        "dataType": "refObject",
        "properties": {
            "idProjekta": {"dataType":"double","default":0},
            "nazivProjekta": {"dataType":"string","default":""},
            "datumProjekta": {"dataType":"string","default":""},
            "akronim": {"dataType":"string","default":""},
            "apstraktSrp": {"dataType":"string","default":""},
            "apstraktEng": {"dataType":"string","default":""},
            "ukupanBudzet": {"dataType":"double","default":0},
            "snimanjeProjekta": {"dataType":"string","default":""},
            "podprogram": {"dataType":"string","default":""},
            "idRukovodioca": {"dataType":"double","default":0},
            "nazivInstSrp": {"dataType":"string","default":""},
            "projekatInst1": {"dataType":"double","default":0},
            "projekatInst2": {"dataType":"double","default":0},
            "projekatInst3": {"dataType":"double","default":0},
            "projekatInst4": {"dataType":"double","default":0},
            "projekatInst5": {"dataType":"double","default":0},
            "projekatOblast1": {"dataType":"double","default":0},
            "projekatOblast2": {"dataType":"double","default":0},
            "projekatOblast3": {"dataType":"double","default":0},
            "projekatOblast4": {"dataType":"double","default":0},
            "projekatOblast5": {"dataType":"double","default":0},
            "status": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Sale": {
        "dataType": "refObject",
        "properties": {
            "id2": {"dataType":"double","default":0},
            "date": {"dataType":"datetime","required":true},
            "description": {"dataType":"string","default":""},
            "delivery_adress": {"dataType":"string","default":""},
            "delivery_phone": {"dataType":"string","default":""},
            "amount": {"dataType":"double","default":0},
            "payment_type": {"dataType":"string","default":""},
            "idu": {"dataType":"double","default":0},
            "idc": {"dataType":"double","default":0},
            "name": {"dataType":"string","default":""},
            "email": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "idRukovodioca": {"dataType":"double","default":0},
            "username": {"dataType":"string","default":""},
            "lozinka": {"dataType":"string","default":""},
            "ime": {"dataType":"string","default":""},
            "prezime": {"dataType":"string","default":""},
            "datumRodjenja": {"dataType":"string","default":""},
            "mailRukovodioca": {"dataType":"string","default":""},
            "telefon": {"dataType":"string","default":""},
            "pregledPodnetih": {"dataType":"string","default":""},
            "idInstitucije": {"dataType":"double","default":0},
            "nazivInstSrp": {"dataType":"string","default":""},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/evaluation/getAllEvaluationForOneProject/:idProjekta',
            ...(fetchMiddlewares<RequestHandler>(EvaluationController)),
            ...(fetchMiddlewares<RequestHandler>(EvaluationController.prototype.getAllEvaluationForOneProject)),

            function EvaluationController_getAllEvaluationForOneProject(request: any, response: any, next: any) {
            const args = {
                    idProjekta: {"in":"path","name":"idProjekta","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new EvaluationController();


              const promise = controller.getAllEvaluationForOneProject.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/evaluation/insertEvaluation',
            ...(fetchMiddlewares<RequestHandler>(EvaluationController)),
            ...(fetchMiddlewares<RequestHandler>(EvaluationController.prototype.insertEvaluation)),

            function EvaluationController_insertEvaluation(request: any, response: any, next: any) {
            const args = {
                    evaluation: {"in":"body","name":"evaluation","required":true,"ref":"Evaluation"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new EvaluationController();


              const promise = controller.insertEvaluation.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/evaluation/editEvaluation',
            ...(fetchMiddlewares<RequestHandler>(EvaluationController)),
            ...(fetchMiddlewares<RequestHandler>(EvaluationController.prototype.editEvaluation)),

            function EvaluationController_editEvaluation(request: any, response: any, next: any) {
            const args = {
                    evaluation: {"in":"body","name":"evaluation","required":true,"ref":"Evaluation"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new EvaluationController();


              const promise = controller.editEvaluation.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/evaluation/deleteEvaluation/:idEvaluacije',
            ...(fetchMiddlewares<RequestHandler>(EvaluationController)),
            ...(fetchMiddlewares<RequestHandler>(EvaluationController.prototype.deleteEvaluation)),

            function EvaluationController_deleteEvaluation(request: any, response: any, next: any) {
            const args = {
                    idEvaluacije: {"in":"path","name":"idEvaluacije","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new EvaluationController();


              const promise = controller.deleteEvaluation.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/evaluation/editStatus',
            ...(fetchMiddlewares<RequestHandler>(EvaluationController)),
            ...(fetchMiddlewares<RequestHandler>(EvaluationController.prototype.editStatus)),

            function EvaluationController_editStatus(request: any, response: any, next: any) {
            const args = {
                    projekat: {"in":"body","name":"projekat","required":true,"ref":"Project"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new EvaluationController();


              const promise = controller.editStatus.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/field_names/getAllField_names',
            ...(fetchMiddlewares<RequestHandler>(Field_namesController)),
            ...(fetchMiddlewares<RequestHandler>(Field_namesController.prototype.getAllField_names)),

            function Field_namesController_getAllField_names(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new Field_namesController();


              const promise = controller.getAllField_names.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/field_names/editField_names',
            ...(fetchMiddlewares<RequestHandler>(Field_namesController)),
            ...(fetchMiddlewares<RequestHandler>(Field_namesController.prototype.editInstitution)),

            function Field_namesController_editInstitution(request: any, response: any, next: any) {
            const args = {
                    field_names: {"in":"body","name":"field_names","required":true,"ref":"Field_names"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new Field_namesController();


              const promise = controller.editInstitution.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/files/insertFiles',
            ...(fetchMiddlewares<RequestHandler>(FilesController)),
            ...(fetchMiddlewares<RequestHandler>(FilesController.prototype.insertEvaluation)),

            function FilesController_insertEvaluation(request: any, response: any, next: any) {
            const args = {
                    fajlovi: {"in":"body","name":"fajlovi","required":true,"ref":"Fajlovi"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new FilesController();


              const promise = controller.insertEvaluation.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/files/getFilesProject/:naziv',
            ...(fetchMiddlewares<RequestHandler>(FilesController)),
            ...(fetchMiddlewares<RequestHandler>(FilesController.prototype.getFilesProject)),

            function FilesController_getFilesProject(request: any, response: any, next: any) {
            const args = {
                    naziv: {"in":"path","name":"naziv","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new FilesController();


              const promise = controller.getFilesProject.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/institution/getAllInstitution',
            ...(fetchMiddlewares<RequestHandler>(InstutionController)),
            ...(fetchMiddlewares<RequestHandler>(InstutionController.prototype.getAllInstitution)),

            function InstutionController_getAllInstitution(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new InstutionController();


              const promise = controller.getAllInstitution.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/institution',
            ...(fetchMiddlewares<RequestHandler>(InstutionController)),
            ...(fetchMiddlewares<RequestHandler>(InstutionController.prototype.insertInstitution)),

            function InstutionController_insertInstitution(request: any, response: any, next: any) {
            const args = {
                    institution: {"in":"body","name":"institution","required":true,"ref":"Institution"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new InstutionController();


              const promise = controller.insertInstitution.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/institution/editInstitution',
            ...(fetchMiddlewares<RequestHandler>(InstutionController)),
            ...(fetchMiddlewares<RequestHandler>(InstutionController.prototype.editInstitution)),

            function InstutionController_editInstitution(request: any, response: any, next: any) {
            const args = {
                    institution: {"in":"body","name":"institution","required":true,"ref":"Institution"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new InstutionController();


              const promise = controller.editInstitution.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/institution/deleteInstitution/:idInstitucije',
            ...(fetchMiddlewares<RequestHandler>(InstutionController)),
            ...(fetchMiddlewares<RequestHandler>(InstutionController.prototype.deleteInstitution)),

            function InstutionController_deleteInstitution(request: any, response: any, next: any) {
            const args = {
                    idInstitucije: {"in":"path","name":"idInstitucije","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new InstutionController();


              const promise = controller.deleteInstitution.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/institution/search/:idInstitucije',
            ...(fetchMiddlewares<RequestHandler>(InstutionController)),
            ...(fetchMiddlewares<RequestHandler>(InstutionController.prototype.searchInstitution)),

            function InstutionController_searchInstitution(request: any, response: any, next: any) {
            const args = {
                    idInstitucije: {"in":"path","name":"idInstitucije","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new InstutionController();


              const promise = controller.searchInstitution.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/oblast/getAllOblast',
            ...(fetchMiddlewares<RequestHandler>(OblastController)),
            ...(fetchMiddlewares<RequestHandler>(OblastController.prototype.getAllOblast)),

            function OblastController_getAllOblast(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OblastController();


              const promise = controller.getAllOblast.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/oblast',
            ...(fetchMiddlewares<RequestHandler>(OblastController)),
            ...(fetchMiddlewares<RequestHandler>(OblastController.prototype.insertOblast)),

            function OblastController_insertOblast(request: any, response: any, next: any) {
            const args = {
                    oblast: {"in":"body","name":"oblast","required":true,"ref":"Oblast"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OblastController();


              const promise = controller.insertOblast.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/oblast/editOblast',
            ...(fetchMiddlewares<RequestHandler>(OblastController)),
            ...(fetchMiddlewares<RequestHandler>(OblastController.prototype.editOblast)),

            function OblastController_editOblast(request: any, response: any, next: any) {
            const args = {
                    oblast: {"in":"body","name":"oblast","required":true,"ref":"Oblast"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OblastController();


              const promise = controller.editOblast.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/oblast/deleteOblast/:idOblasti',
            ...(fetchMiddlewares<RequestHandler>(OblastController)),
            ...(fetchMiddlewares<RequestHandler>(OblastController.prototype.deleteOblast)),

            function OblastController_deleteOblast(request: any, response: any, next: any) {
            const args = {
                    idOblasti: {"in":"path","name":"idOblasti","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OblastController();


              const promise = controller.deleteOblast.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/oblast/search/:idOblasti',
            ...(fetchMiddlewares<RequestHandler>(OblastController)),
            ...(fetchMiddlewares<RequestHandler>(OblastController.prototype.searchOblast)),

            function OblastController_searchOblast(request: any, response: any, next: any) {
            const args = {
                    idOblasti: {"in":"path","name":"idOblasti","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OblastController();


              const promise = controller.searchOblast.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/project/getAllProjects',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.getAllProjects)),

            function ProjectController_getAllProjects(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.getAllProjects.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/project/getAllProjectsUser/:idRukovodioca',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.getAllProjectsUser)),

            function ProjectController_getAllProjectsUser(request: any, response: any, next: any) {
            const args = {
                    idRukovodioca: {"in":"path","name":"idRukovodioca","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.getAllProjectsUser.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/project/insertProject',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.insertProject)),

            function ProjectController_insertProject(request: any, response: any, next: any) {
            const args = {
                    project: {"in":"body","name":"project","required":true,"ref":"Project"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.insertProject.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/project/GetOneProject/:idProjekta',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.GetOneProject)),

            function ProjectController_GetOneProject(request: any, response: any, next: any) {
            const args = {
                    idProjekta: {"in":"path","name":"idProjekta","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.GetOneProject.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/project/editProjectStatus',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.editProjectStatus)),

            function ProjectController_editProjectStatus(request: any, response: any, next: any) {
            const args = {
                    project: {"in":"body","name":"project","required":true,"ref":"Project"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.editProjectStatus.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/project/editStatus',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.editStatus)),

            function ProjectController_editStatus(request: any, response: any, next: any) {
            const args = {
                    projekat: {"in":"body","name":"projekat","required":true,"ref":"Project"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.editStatus.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/project/deleteProjectFirstPage/:nazivProjekta',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.deleteProjectFirstPage)),

            function ProjectController_deleteProjectFirstPage(request: any, response: any, next: any) {
            const args = {
                    nazivProjekta: {"in":"path","name":"nazivProjekta","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.deleteProjectFirstPage.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/project/editOneProject',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.editOneProject)),

            function ProjectController_editOneProject(request: any, response: any, next: any) {
            const args = {
                    projekat: {"in":"body","name":"projekat","required":true,"ref":"Project"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.editOneProject.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/project/projectUpdate',
            ...(fetchMiddlewares<RequestHandler>(ProjectController)),
            ...(fetchMiddlewares<RequestHandler>(ProjectController.prototype.projectUpdate)),

            function ProjectController_projectUpdate(request: any, response: any, next: any) {
            const args = {
                    projekat: {"in":"body","name":"projekat","required":true,"ref":"Project"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();


              const promise = controller.projectUpdate.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/projektizaizmenu/getAllProjektizaizmenu',
            ...(fetchMiddlewares<RequestHandler>(ProjektizaizmenuController)),
            ...(fetchMiddlewares<RequestHandler>(ProjektizaizmenuController.prototype.getAllProjektizaizmenu)),

            function ProjektizaizmenuController_getAllProjektizaizmenu(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjektizaizmenuController();


              const promise = controller.getAllProjektizaizmenu.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/projektizaizmenu/editProjektizaizmenu',
            ...(fetchMiddlewares<RequestHandler>(ProjektizaizmenuController)),
            ...(fetchMiddlewares<RequestHandler>(ProjektizaizmenuController.prototype.editProjektizaizmenu)),

            function ProjektizaizmenuController_editProjektizaizmenu(request: any, response: any, next: any) {
            const args = {
                    projekatzaizmenu: {"in":"body","name":"projekatzaizmenu","required":true,"ref":"ProjektiZaIzmenu"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjektizaizmenuController();


              const promise = controller.editProjektizaizmenu.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/sales/getAllSales',
            ...(fetchMiddlewares<RequestHandler>(SalesController)),
            ...(fetchMiddlewares<RequestHandler>(SalesController.prototype.getAllSales)),

            function SalesController_getAllSales(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SalesController();


              const promise = controller.getAllSales.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/users/login',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.login)),

            function UserController_login(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.login.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/users/register',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.register)),

            function UserController_register(request: any, response: any, next: any) {
            const args = {
                    user: {"in":"body","name":"user","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.register.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/users/getAllUsers',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getAllUsers)),

            function UserController_getAllUsers(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.getAllUsers.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/users/editUser',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.editUser)),

            function UserController_editUser(request: any, response: any, next: any) {
            const args = {
                    korisnik: {"in":"body","name":"korisnik","required":true,"ref":"User"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.editUser.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
