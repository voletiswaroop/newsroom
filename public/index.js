!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/resources/",r(r.s=4)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("webpack-merge")},function(e,t,r){"use strict";var n=r(0).join;e.exports={output:{path:n(__dirname,"../public/resources"),publicPath:"/resources/"},resolve:{extensions:[".js"],modules:[n(__dirname,"../node_modules"),n(__dirname,"../src")]},module:{rules:[{test:/\.js$/,exclude:/node_modules/,use:"babel-loader"}]}}},function(e,t,r){r(5),e.exports=r(6)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";var n=a(r(7)),o=a(r(8)),s=a(r(9)),u=r(0),i=r(10);function a(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)();l.use(o.default.urlencoded({extended:!1})),l.use(o.default.json());(0,i.log)("info","Configuring server for environment: production..."),l.use((0,s.default)()),l.use((function(e,t,r){if("/"==e.path.substr(-1)&&e.path.length>1){var n=e.url.replace(/\/+/g,"/").replace(/\/+$/,"");t.redirect(301,n)}else r()})),l.set("view engine","ejs"),l.set("port",process.env.PORT||3e3),function(e){var t=r(19),o=r(20).default,s=(0,u.join)(__dirname,"resources");e.use("/resources/",n.default.static(s,{maxAge:"30d"})),e.use(o({clientStats:t,outputPath:s})),e.set("views",(0,u.join)(__dirname,"views"))}(l),l.listen(l.get("port"),(function(){return(0,i.log)("info","Server listening on port "+l.get("port")+"...")}))},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("winston")},function(e,t,r){"use strict";var n=r(1),o=r(2),s=r(3),u=r(0).join,i=r(12);e.exports=o(s,{mode:"development",name:"client",target:"web",entry:["webpack-hot-middleware/client",u(__dirname,"../src/client/index")],devtool:"inline-source-map",output:{filename:"app.client.[hash].js",chunkFilename:"[name].[hash].js"},module:{rules:[{test:/\.css$/,exclude:/node_modules/,use:[i.loader,{loader:"css-loader",options:{modules:!0,localIdentName:"[name]__[local]--[hash:base64:5]"}},"stylus-loader"]},{test:/\.(png|jpg|gif|otf|woff|ttf|ico)$/,use:[{loader:"file-loader",options:{modules:!0,localIdentName:"[name]__[local]--[hash:base64:5]"}}]}]},optimization:{runtimeChunk:{name:"bootstrap"},splitChunks:{chunks:"initial",cacheGroups:{vendors:{test:/[\\/]node_modules[\\/]/,name:"vendor"}}}},plugins:[new n.HotModuleReplacementPlugin,new i({filename:"[name].[hash].css",chunkFilename:"[name].[hash].css"})]})},function(e,t){e.exports=require("extract-css-chunks-webpack-plugin")},function(e,t,r){"use strict";var n=r(2),o=r(1),s=r(3),u=r(0).join,i=r(14);e.exports=n(s,{mode:"development",name:"server",target:"node",externals:i,entry:[u(__dirname,"../src/server/index")],devtool:"inline-source-map",output:{filename:"app.server.js",libraryTarget:"commonjs2"},module:{rules:[{test:/\.css/,exclude:/node_modules/,use:[{loader:"css-loader/locals",options:{modules:!0,localIdentName:"[name]__[local]--[hash:base64:5]"}},{loader:"stylus-loader"}]},{test:/\.(png|jpg|gif|otf|woff|ttf|ico)$/,use:[{loader:"file-loader",options:{modules:!0,localIdentName:"[name]__[local]--[hash:base64:5]"}}]}]},plugins:[new o.optimize.LimitChunkCountPlugin({maxChunks:1})]})},function(e,t,r){"use strict";var n=r(15).readdirSync,o=r(0).join;e.exports=n(o(__dirname,"../node_modules")).filter((function(e){return!/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(e)})).reduce((function(e,t){return e[t]="commonjs "+t,e}),{})},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t){e.exports=require("webpack-hot-server-middleware")},function(e,t){e.exports=require("./resources/stats.json")},function(e,t){e.exports=require("./resources/app.server.js")}]);