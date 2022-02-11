import { getRepository } from 'typeorm';
import { Employees } from './../entities/employees';

type EmployeeRequest = {
    name: string
    imageUrl: string
    office: string
    tags: string
    positionName: string
    hiringDate: Date
    employeeCode: string
    parentId: string
}

export class CreateEmployeeService {
    async execute({
        name,
        imageUrl,
        office,
        tags,
        positionName,
        hiringDate,
        employeeCode,
        parentId,
    }: EmployeeRequest): Promise<Employees | Error> {
        const repo = getRepository(Employees)

        if(await repo.findOne({ name }))
            return new Error("Colaborador já cadastrado")
        
        if(await repo.findOne({ employeeCode }))
            return new Error("Código atribuido, já está cadastrado para outro Colaborador")

        const employee = repo.create({
            name,
            imageUrl,
            office,
            tags,
            positionName,
            hiringDate,
            employeeCode,
            parentId,
        })

        await repo.save(employee)

        return employee
    }
}