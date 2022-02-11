import { GetAllEmployeesService } from './../services/GetAllEmployeesService';
import { Request, Response } from 'express';

export class GetAllEmployeesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllEmployeesService()

        const employees = await service.execute()

        return response.json(employees)
    }
}