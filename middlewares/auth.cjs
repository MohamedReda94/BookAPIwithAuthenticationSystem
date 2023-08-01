 const jwt =require ('jsonwebtoken')

module.exports = (req,res,next) =>{

    try{
        const fullToken =req.headers.authorization
        const token = fullToken?.split(' ')[1]
        if(!token) return res.status(403).send("Access Denide")
       let user = jwt.verify(token,'secuirtKey')
       req.user = user
        next()
    }catch{
        return res.status(400).send('invalid jwt') 
  
    }
}