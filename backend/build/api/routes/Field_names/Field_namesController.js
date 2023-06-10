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
exports.Field_namesController = void 0;
const tsoa_1 = require("tsoa");
const Field_namesDAO_1 = require("../../../mysql/models/Field_namesDAO");
let Field_namesController = class Field_namesController extends tsoa_1.Controller {
    getAllField_names() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Field_namesDAO_1.field_namesDAO.getAllField_names();
        });
    }
    editInstitution(field_names) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Field_namesDAO_1.field_namesDAO.editField_names(field_names);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("getAllField_names")
], Field_namesController.prototype, "getAllField_names", null);
__decorate([
    (0, tsoa_1.Put)("editField_names"),
    __param(0, (0, tsoa_1.Body)())
], Field_namesController.prototype, "editInstitution", null);
Field_namesController = __decorate([
    (0, tsoa_1.Route)("field_names")
], Field_namesController);
exports.Field_namesController = Field_namesController;
//# sourceMappingURL=Field_namesController.js.map