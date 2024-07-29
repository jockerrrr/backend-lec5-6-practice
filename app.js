const request=require("request")

// const url="http://api.weatherapi.com/v1/current.json?key=173f355ecbb048ef951162602241907&q=London&aqi=no"
// request({url},(error,response)=>{
//     // console.log(response.body)
//     const data1=JSON.parse(response.body)
//     // console.log(data1)
//     console.log(data1.location.name)
//     console.log(data1.current.condition.text)
// })
// const url="http://api.weatherapi.com/v1/current.json?key=173f355ecbb048ef951162602241907&q=London&aqi=no"
// request({url,json:true},(error,response)=>{
//     // console.log(response.body)
//     // const data1=JSON.parse(response.body)
//     // console.log(data1)
//     console.log(response.body.location.name)
//     console.log(response.body.current.condition.text)
// })
// const url="http://api.weatherapi.com/v1/current.json?key=173f355ecbb048ef951162602241907&q=egypt&aqi=no"
// request({url,json:true},(error,response)=>{
//     if(error){
//         console.log("error in website")
//     }else if(response.body.error){
//         console.log(response.body.error.message)
//     }else{
//         console.log(response.body.location.name ,response.body.current.condition.text)
//     }
// })

const forecast=require("./data1/forecast")
const geocode=require("./data1/geocode")

const country=process.argv[2]

geocode(country,(error,data)=>{
    console.log("error: ",error)
    console.log("data: ",data)
    forecast(data.longtitude,data.latitude,(error,data)=>{
        console.log("error: ",error)
        console.log("data: ",data)
    })
})

