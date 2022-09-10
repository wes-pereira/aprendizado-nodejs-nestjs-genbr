import { DeleteResult, Repository } from "typeorm";
import { Tarefa } from "../entities/tarefa.entity";
export declare class TarefaService {
    private tarefaRepository;
    constructor(tarefaRepository: Repository<Tarefa>);
    findAll(): Promise<Tarefa[]>;
    findById(id: number): Promise<Tarefa>;
    findByNome(nome: string): Promise<Tarefa[]>;
    create(tarefa: Tarefa): Promise<Tarefa>;
    update(tarefa: Tarefa): Promise<Tarefa>;
    delete(id: number): Promise<DeleteResult>;
}
