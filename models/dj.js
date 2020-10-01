const {v4:uuidV4} = require('uuid');


class Dj{

    constructor(name = 'no-name'){
        this.id = uuidV4(); //Identificador Único
        this.name = name;
        this.votes = 0;
    }

}

module.exports = Dj;