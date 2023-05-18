const { merge }= require('webpack-merge') ;
const common =require('./webpack.common.js');

console.log('aaaaaaaaaaaa')
const config=merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
});
module.exports=config
