import { Tarefa } from "../entities/tarefa.entity";
import { TarefaService } from "../service/tarefa.service";
export declare class TarefaController {
    private readonly service;
    constructor(service: TarefaService);
    findAll(): Promise<Tarefa[]>;
    findById(id: number): Promise<Tarefa>;
    findByNome(nome: string): Promise<Tarefa[]>;
    create(tarefa: Tarefa): Promise<Tarefa>;
    update(tarefa: Tarefa): Promise<Tarefa>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
