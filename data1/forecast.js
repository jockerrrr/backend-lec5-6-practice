const request=require("request")

const forecast=(longtitude,latitude,callback)=>{
    const url="http://api.weatherapi.com/v1/current.json?key=173f355ecbb048ef951162602241907&q= "+longtitude +" , " +latitude
    request({url,json:true},(error,response)=>{
        if(error){
            callback("cant reach weather api service",undefined)
        }else if(response.body.error){
            callback(response.body.error.message,undefined)
        }else{
            callback(undefined,response.body.location.name + " it is "+ response.body.current.condition.text)
        }
    })
    
    }

    module.exports=forecast