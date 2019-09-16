module.exports=(req,res,next)=>{

    if(req.user.info.waiver == false){
        

    }
    next();
};
