export const verifyMobile_middleware=(req,res,next)=>{

    if (!req.body.mobNum) {
       return res.status(400).send({'message':'Plese enter the Mobile Number !'})
    }

    if (!req.body.email) {
        return res.status(400).send({'message':'Plese enter the Mobile Number !'})
     }
    next()
    }