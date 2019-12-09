'use strict'
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

module.exports.generateVRT = function(mutante,error){
    let img1;
    let img2;
    fs.readdir(`./report/mutante${mutante}`,function(err, items) {
        for(var i=0;i<items.length;i++){
            if(items[i].includes('.png')){
                img1 = PNG.sync.read(fs.readFileSync(`./report/baseline/${items[i]}`));
                img2 = PNG.sync.read(fs.readFileSync(`./report/mutante${mutante}/${items[i]}`));
                if(img1 != img2){
                    const {width, height} = img1;
                    const diff = new PNG({width, height});
                    pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.8});
                    fs.writeFileSync(`./report/mutante${mutante}/diff_${items[i]}`, PNG.sync.write(diff));
            
                }   
            }
        }
    });
    //const img1 = PNG.sync.read(fs.readFileSync(`${path1}`));
    //const img2 = PNG.sync.read(fs.readFileSync(`${path2}`));
}


