import { Router } from 'express'
import { CreateEmployeeController } from './controllers/CreateEmployeeController'
import { GetAllEmployeesController } from './controllers/GetAllEmployeesController'
import { UpdateEmployeeController } from './controllers/UpdateEmployeeController'
import { DeleteEmployeeController } from './controllers/DeleteEmployeeController'

const routes = Router()

routes.post("/employee", new CreateEmployeeController().handle)
routes.get("/employee", new GetAllEmployeesController().handle)
routes.put("/employee/:id", new UpdateEmployeeController().handle)
routes.delete("/employee/:id", new DeleteEmployeeController().handle)

export { routes }