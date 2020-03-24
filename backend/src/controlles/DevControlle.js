const  { Router } = require('express')
const axios = require('axios')
const Dev=  require('../models/Dev')
const parseStringArray = require('../utils/parseStringArray')

module.exports={


    async index  (req,res){

        const  devs = await Dev.find()

        return res.json(devs)
    },

      async store (req,res){

        const {techs,github_username,latitude,longitude} = req.body
    

        let dev = await Dev.findOne({github_username})
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const {name=login,avatar_url,bio} = apiResponse.data
             const techsArray  =parseStringArray(techs)
            const location = {
                type:'Point',
                coordinates:[latitude,longitude ]
            }
             dev =  await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techsArray,
                location
            })
        

        }
      
        return res.json(dev)
    
    },

    async update(){

    },

    async destroy (){


    }



}