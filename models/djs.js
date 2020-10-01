const Dj = require("./dj");


class Djs {
    constructor(){
        this.djs = [];
    }
    addDj(dj = new Dj()){
        this.djs.push(dj);
    }

    getDjs(){
        return this.djs;
    }

    deleteDj(id = ''){
        this.djs = this.djs.filter(dj=> dj.id !== id);
        return this.djs
    }

    voteDj(id= ''){
        this.djs = this.djs.map(dj=>{
            if(dj.id===id){
                dj.votes++;
                return dj;
            }else{
                return dj;
            }
        });
    }
}

module.exports = Djs;