const { Todo } = require('../models')
class todosController {
    static async getAll (req,res,next){
        try{ 
        const data = await Todo.findAll(
            {
                // where: {status : 'active'}
            }
        )
        console.log("berhasil")
        res.status(200).json(data) 
        
    }
    catch(err){
        next(err)
        console.log(err)
    }
    
}
    static getById = async(req,res,next) => {
        const {id} = req.params
        try{ 
            
            const data =await Todo.findByPk(id)
            res.status(200).json(data)
            if(!data){
                return res.status(403).send({
                    message: 'Data Not Found'
                    })
        }
    }
        catch(err){
            next(err)
        }
    }
    static create = async(req,res,next) => {
        
        try{ 
            const data = await Todo.create(req.body)
            res.status(201).json(data)
            
        }
        catch(err){
            next(err)
            
        }
    }
    static delete = async(req,res,next) => {
        
        try{ 
            const {id}  = req.params
            await Todo.update({
                status : 'inactive',
                },{where:{id : id}},
            )
            res.status(200).json({message: 'Todo Deleted'})
        }
    catch(err){
        next(err)
        }
    }
}

module.exports = todosController