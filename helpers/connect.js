const { MongoClient } = require("mongodb");

module.exports = class Connect {
    static instanceConnect;
        user;
        port;
        #pass;
        #host;
        #cluster;
        #dbName;
    
        static instance;
    
        constructor()
        {
            if(typeof Connect.instance === "object"){
                return Connect.instance;
            }
            
            this.user = process.env.MONGO_USER;
            this.port = process.env.MONGO_PORT;
            this.setPass = process.env.MONGO_PWD;
            this.setHost = process.env.MONGO_HOST;
            this.setCluster = process.env.MONGO_CLUSTER;
            this.#dbName = process.env.MONGO_DB;
            this.#open();
            this.db = this.conexion.db(this.getDbName)
            Connect.instance = this;
            return this;
        }
        set setPass(pass){
            this.#pass = pass
        }
        set setHost(host){
            this.#host = host
        }
        set setCluster(cluster){
            this.#cluster = cluster
        }
        set setDbName(dbName){
            this.#dbName = dbName
        }
        get getPass(){
            return this.#pass
        }
        get getHost(){
            return this.#host
        }
        get getCluster(){
            return this.#cluster
        }
        get getDbName(){
            return this.#dbName
        }
        async #open(){
            this.conexion = new MongoClient(`${this.getHost}${this.user}:${this.getPass}@${this.getCluster}:${this.port}/${this.getDbName}`);
            await this.conexion.connect();
            
        }
        async reconnect(){
            await this.#open();
        }
        async close(){
            await this.conexion.close();
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
