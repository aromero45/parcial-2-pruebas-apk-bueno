'use strict'
const shell = require('shelljs');
const fs = require('fs');
//const s3 = require('../../worker-sqs/s3Storage.js')

module.exports.generateCalabash = function(req,success,error){
    var appPackage;
    var apkInstall;
    var init= req.body.inicio;
    var cant= req.body.cantidad;
    //var path = req.body.path;
    var item =0;
    //var i=init;
    //console.log("..."+JSON.stringify(req));
    console.log('Request: ',req.body);
    var createFolder = (path) => {
        return new Promise((resolve, reject) => {
            console.log(` createFolder start: path = ${path}`);
            fs.mkdir(path, (err) => {
                if (err) resolve(err);
                resolve();
            });
        });
    }
    for(var i = 0,p = Promise.resolve();i<cant;i++){
        p= p.then(_ => new Promise(resolve => {
            console.log('valor de i: ', (init+item));
            var path=`./report/mutante${init+item}`;
            createFolder(path);
            shell.exec(`rm ./com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
            shell.exec(`cp ./mutantes/com.evancharlton.mileage-mutant${init+item}/com.evancharlton.mileage_3110-aligned-debugSigned.apk ./ && calabash-android resign com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
            //const eventsNumber = cant ? cant : 10;
            shell.exec(`adb install ./com.evancharlton.mileage_3110-aligned-debugSigned.apk`)
            shell.exec(`adb shell monkey -p com.evancharlton.mileage -v 5000`, function(code, stdout, stderr) {
                    fs.writeFileSync(`${path}/monkey${init+item}.log`,stdout);
            });
            shell.exec(`calabash-android resign com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
            shell.exec(`calabash-android build com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
            shell.exec(`SCREENSHOT_PATH=./report/mutante${init+item}/ calabash-android run com.evancharlton.mileage_3110-aligned-debugSigned.apk -f html -o ./report/mutante${init+item}/result_mutante_${init+item}.html`, function(val, stdout, stderr) {
                if(item == cant){
                    success("ok");
                }else{
                    item = item+1;
                    resolve();
                }     
                /*fs.readdir(`${path}/report/mutante${i}/`,function(err, items) {
                            let file;
                            for(i=0;i<items.length;i++){
                                if(items[i].includes('html')){
                                file = items[i];
                                break;
                                }
                            }
                            const content = fs.readFileSync(`${path}/report/mutante${i}/${file}`);
                            console.log('Contenido del archivo: ', content);
                        });*/
                
            });
            //copyFile(source,target);
            //requestcall(req,cant).then(()=>{
                //shell.exec(`mdkir ./report/mutante_${i}`);
                //fs.rmdir(`./report/mutante_${init}`);
                //shell.exec(`rm ./com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
                
                //shell.exec(`cd ./mutantes/com.evancharlton.mileage-mutant${init}`);
                //shell.exec(`cp ./mutantes/com.evancharlton.mileage-mutant${init}/com.evancharlton.mileage_3110-aligned-debugSigned.apk ./ && calabash-android resign com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
                /*const eventsNumber = cant ? cant : 10;
                shell.exec(`adb install ./com.evancharlton.mileage_3110-aligned-debugSigned.apk`)
                shell.exec(`adb shell monkey -p com.evancharlton.mileage -v ${eventsNumber}`, function(code, stdout, stderr) {
                        console.log('stdout monkey: ',stdout);
                });
                shell.exec(`calabash-android resign com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
                shell.exec(`calabash-android build com.evancharlton.mileage_3110-aligned-debugSigned.apk`);
                shell.exec(`SCREENSHOT_PATH=report/mutante${init}/ calabash-android run com.evancharlton.mileage_3110-aligned-debugSigned.apk -f html -o ./report/mutante_${init}/result.html`, function(val, stdout, stderr) {
                            /*fs.readdir(`${path}/report/mutante${i}/`,function(err, items) {
                                let file;
                                for(i=0;i<items.length;i++){
                                    if(items[i].includes('html')){
                                    file = items[i];
                                    break;
                                    }
                                }
                                const content = fs.readFileSync(`${path}/report/mutante${i}/${file}`);
                                console.log('Contenido del archivo: ', content);
                            });
                    /*if(item == cant){
                        success("ok");
                    }else{
                        item = item+1;
                        resolve();
                    }*/
                //});
            //});
        }));
    }
}

 
