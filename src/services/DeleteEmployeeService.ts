import { Employees } from './../entities/employees';
import { getRepository } from 'typeorm';

export class DeleteEmployeeService {
    async execute(id: string) {
        const repo = getRepository(Employees)

        if(!await repo.findOne(id))
            return new Error("Colaborador não encontrado")

        await repo.delete(id)
    }
}