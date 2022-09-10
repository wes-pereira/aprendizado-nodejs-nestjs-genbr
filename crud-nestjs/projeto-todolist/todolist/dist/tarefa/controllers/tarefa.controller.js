"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaController = void 0;
const common_1 = require("@nestjs/common");
const tarefa_entity_1 = require("../entities/tarefa.entity");
const tarefa_service_1 = require("../service/tarefa.service");
let TarefaController = class TarefaController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findById(id) {
        return this.service.findById(id);
    }
    findByNome(nome) {
        return this.service.findByNome(nome);
    }
    create(tarefa) {
        return this.service.create(tarefa);
    }
    update(tarefa) {
        return this.service.update(tarefa);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/nome/:nome'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "findByNome", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarefa_entity_1.Tarefa]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarefa_entity_1.Tarefa]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TarefaController.prototype, "delete", null);
TarefaController = __decorate([
    (0, common_1.Controller)('/tarefa'),
    __metadata("design:paramtypes", [tarefa_service_1.TarefaService])
], TarefaController);
exports.TarefaController = TarefaController;
//# sourceMappingURL=tarefa.controller.js.map