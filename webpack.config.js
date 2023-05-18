const dev=require('./config/webpack.dev')
const prod=require('./config/webpack.prod')
module.exports=(env)=>{
    console.log(env.production===false,'ads')
    if(env.production){

        return prod
    }
    return dev;
}
