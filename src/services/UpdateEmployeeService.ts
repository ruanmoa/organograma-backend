import { getRepository } from 'typeorm';
import { Employees } from './../entities/employees';

type EmployeeUpdateRequest = {
    id: string
    name: string
    imageUrl: string
    office: string
    tags: string
    positionName: string
    hiringDate: Date
    employeeCode: string
    parentId: string
}

export class UpdateEmployeeService {
    async execute({
        id,
        name,
        imageUrl,
        office,
        tags,
        positionName,
        hiringDate,
        employeeCode,
        parentId
    }: EmployeeUpdateRequest): Promise<Employees | Error>  {
        const repo = getRepository(Employees)

        console.log("---------------ID", id)
        const employee = await repo.findOne(id)
        
        
        if(!employee)
            return new Error("Colaborador não encontrado")

        employee.name = name ? name : employee.name
        employee.imageUrl = imageUrl ? imageUrl : employee.imageUrl
        employee.office = office ? office : employee.office
        employee.tags = tags ? tags : employee.tags
        employee.positionName = positionName ? positionName : employee.positionName
        employee.hiringDate = hiringDate ? hiringDate : employee.hiringDate
        employee.employeeCode = employeeCode ? employeeCode : employee.employeeCode
        employee.parentId = parentId ? parentId : employee.parentId

        await repo.save(employee)

        return employee
    }
}