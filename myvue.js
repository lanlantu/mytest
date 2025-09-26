class Myvue {
    constructor(parameters) {
       Object.keys(parameters.data).forEach((propertyName,index)=>{
        Object.defineProperty(this,propertyName,{
            get(){
                return parameters.data[propertyName]
            },
            set(val){
                parameters.data[propertyName]=val

            }
        })
    })
    } 
}       