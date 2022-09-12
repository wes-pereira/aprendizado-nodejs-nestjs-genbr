import { Categoria } from "src/categoria/entities/categoria.entity";
export declare class Tarefa {
    id: number;
    nome: string;
    descricao: string;
    responsavel: string;
    data: Date;
    status: Boolean;
    categoria: Categoria;
}
