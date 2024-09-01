import { contact } from "../controllers/contact.controller.js";
import { verify_middleware } from "../middleware/verify_singnup.middleware.js";
import { is_admin } from "../middleware/Is_admin.middleware.js";
export const contact_data=(app)=>{
app.post('/contact',[verify_middleware],contact)
}