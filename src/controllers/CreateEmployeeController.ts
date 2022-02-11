import { CreateEmployeeService } from './../services/CreateEmployeeService';
import { Request, Response } from 'express'

export class CreateEmployeeController {
    async handle(request: Request, response: Response) {
        const { 
            name,
            imageUrl,
            office,
            tags,
            positionName,
            hiringDate,
            employeeCode,
            parentId 
        } = request.body

        const service = new CreateEmployeeService

        const result = await service.execute({
            name,
            imageUrl,
            office,
            tags,
            positionName,
            hiringDate,
            employeeCode,
            parentId
        })

        if( result instanceof Error)
            return response.status(400).json(result.message)

        return response.json(result)
    }
}