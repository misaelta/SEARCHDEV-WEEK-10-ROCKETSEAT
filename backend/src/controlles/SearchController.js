const  { Router } = require('express')
const axios = require('axios')
const Dev=  require('../models/Dev')
const parseStringArray = require('../utils/parseStringArray')

module.exports={

    async index  (req,res){

        const {latitude,longitude,techs} = req.query

        const techsArray  =parseStringArray(techs)
        
        const devs  =  await Dev.find({
            techs:{$in:techsArray},
            location:{

                $near:{ 
                    $geometry:{
                        type:"Point",   
                        coordinates:[latitude,longitude]
                    },
                    $maxDistance:100000
                }
            },
        })
        
        return res.json({devs})
    },


}
