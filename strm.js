const fs = require('fs');

const mainpath = process.argv[1].slice(0,-7)

if(process.argv.length>2&&!process.argv.join('/').includes('..')){
    const path = `${mainpath}api/${process.argv[2]}.js`
    if(fs.existsSync(path)){
        eval(fs.readFileSync(path).toString())
    }else{
        eval(fs.readFileSync(`${mainpath}api/default.js`).toString())
    }
}else{
    eval(fs.readFileSync(`${mainpath}default.js`).toString())
}