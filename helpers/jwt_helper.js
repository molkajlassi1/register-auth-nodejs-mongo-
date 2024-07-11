const JWT = require('jsonwebtoken')
const createError =require('http-errors')

module.exports = {
    signAccessToken: (userId) => {
      return new Promise((resolve, reject) => {
        const playload= {
           
            
        }
        const secret =process.env.ACCESS_TOKEN_SECRET
        const options={
            expiresIn:"1h",
            issuer:'pickurpage.com',
            audience:userId
        }
        JWT.sign(playload,secret,options, (err, token) => {
            if (err) {
              reject(err)
              console.log(err.message)
              //reject(err)
              reject(createError.InternalServerError())
            }
                resolve(token)
        })
    })
  },
}
