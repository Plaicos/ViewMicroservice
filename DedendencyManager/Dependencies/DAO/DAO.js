var IIDependency = require("../../InhertedInterface/Dependency");

module.exports = class DAO extends IIDependency {
    static AsyncInitMustBeCalled = false;

    constructor(db) {
        this.Db = db;
    }
    //properties
    Db;
    ObjectId;
    Collections;
    //methods
    SetDatabase(db) {
        this.Db = db.Connection;
        this.ObjectId = db.ObjectId
        this.Collections = {
            chats: db.collection("chats"),
            chat_types: db.collection("chat_types"),
            messages: db.collection("messages")
        }
    }

    
}