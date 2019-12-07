'use strict'
const shell = require('shelljs');
const fs = require('fs');
//const s3 = require('../../worker-sqs/s3Storage.js')

module.exports.generateCalabash = function(req,success,error){
    var appPackage;
    var apkInstall;
    var init= req.body.inicio;
    var cant= req.body.cantidad;
    var path = req.body.path;
    var item =1;
    //console.log("..."+JSON.stringify(req));
    console.log('Request: ',req.body);
    //for(var i = init,p = Promise.resolve();i<cant+1;i++){
        //p= p.then(_ => new Promise(resolve => {
        requestcall(path,req,cant).then(()=>{
            //shell.exec(`mdkir ./report/mutante_${i}`);
            fs.mkdirSync(`./report/mutante_${i}`);
            shell.exec(`SCREENSHOT_PATH=report/mutante${i} calabash-android run ${path}/mutantes/com.evancharlton.mileage-mutant${i}/com.evancharlton.mileage_3110-aligned-debugSigned.apk -f html -o /report/mutante_${i}_result.html`, function(val, stdout, stderr) {
                        fs.readdirSync(`${path}/report/mutante${i}/`,function(err, items) {
                            let file;
                            for(i=0;i<items.length;i++){
                                if(items[i].includes('html')){
                                   file = items[i];
                                   break;
                                }
                            }
                            const content = fs.readFileSync(`${path}/report/mutante${i}/${file}`);
                            console.log('Contenido del archivo: ', content);
                            /*s3.saveFileToS3(`${code}`,content,()=>{ 
                                for(i=0;i<items.length;i++){
                                    if(items[i].includes('html')){
                                        fs.unlinkSync(`${path}/cypress/report/mochawesome-report/${items[i]}`);
                                    }
                                }
                                
                            });*/
                            if(item == cant){
                                success("ok");
                            }else{
                                item = item+1;
                                resolve();
                            }
                        });
                })
            });
        //}));
    //}
}

function requestcall(path_project,req,cant) {
    return new Promise(function(resolve, reject) {
            if(cant>1){
                console.log(cant);
            }else{
                resolve("ok");
            }                
    }); 
 }