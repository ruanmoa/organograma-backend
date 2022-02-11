import { UpdateEmployeeService } from './../services/UpdateEmployeeService';
import { Request, Response } from "express";


export class UpdateEmployeeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
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

        const service = new UpdateEmployeeService()

        
        const result = await service.execute({ 
            id,
            name,
            imageUrl,
            office,
            tags,
            positionName,
            hiringDate,
            employeeCode,
            parentId
        })

        if ( result instanceof Error)
            return response.status(400).json(result.message)

        return response.json(result)
    }
}