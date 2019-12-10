'use strict'
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

module.exports.generateVRT = function(mutante,error){
    let img1;
    let img2;
    fs.readdir(`./report/baseline/`,function(err, itemsBase) {
        fs.readdir(`./report/mutante${mutante}`,function(err,items){
            for(var i=0;i<itemsBase.length;i++){
                for(var j=0;j<items.length;j++){
                    if(items[j].startsWith('Img')){
                        if(items[j].toString() == itemsBase[i].toString()){
                            img1 = PNG.sync.read(fs.readFileSync(`./report/baseline/${itemsBase[i]}`));
                            img2 = PNG.sync.read(fs.readFileSync(`./report/mutante${mutante}/${items[j]}`));
                            if(img1 != img2){
                                const {width, height} = img1;
                                const diff = new PNG({width, height});
                                var dif=pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.8});
                                var size = width * height;
                                var perce = (dif/size)*100;
                                var file= `Porcentaje de diferencia imagen_${j+1}: ` + perce + ' %\n'
                                fs.writeFileSync(`./report/mutante${mutante}/diff_${items[j]}`, PNG.sync.write(diff));
                                fs.appendFile(`./report/mutante${mutante}/diff_${mutante}.log`, file, function(err){
                                    if (err) throw err;
                                } );
                            }
                            break;
                        }   
                    }
                }
            }
        });
        
    });
    //const img1 = PNG.sync.read(fs.readFileSync(`${path1}`));
    //const img2 = PNG.sync.read(fs.readFileSync(`${path2}`));
}


