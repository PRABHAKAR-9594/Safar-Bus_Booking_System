import { heandlecomplain } from "../controllers/handlecomplaints.controllers.js";
import { is_admin } from "../middleware/Is_admin.middleware.js";
import {verify_middleware} from "../middleware/verify_singnup.middleware.js"
export const heandlecomplain_route= (app)=>{
    app.post('/complain',[verify_middleware,is_admin],heandlecomplain)}