import { Employees } from './../entities/employees';
import { getRepository } from 'typeorm';


export class GetAllEmployeesService {
    async execute() {
        const repo = getRepository(Employees)

        const employees = await repo.find()

        return employees
    }
}