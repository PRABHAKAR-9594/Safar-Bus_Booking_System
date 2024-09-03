import { add_bus_controller } from "../controllers/addbus.controller.js";
import { verify_middleware } from "../middleware/verify_singnup.middleware.js";
import { is_admin } from "../middleware/Is_admin.middleware.js";

export const addbus_route=(app)=>{
    app.post('/addbus',[verify_middleware,is_admin],add_bus_controller)
    }