
import config from '../config/config';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';


export default (collection_name) => {
  return new Promise((resolve, reject) => {

    MongoClient.connect(config.db_connection_str, function (err, db) {
      if (err) {
        reject(err);
        db.close();
        return;
      }
      var query = db.collection(collection_name);
      query.findById = function (id) {
        return new Promise((resolve,reject)=>{
          this.find({ _id: ObjectId(id) }).toArray().then(res=>{
            resolve(res[0]);
          });
        });
      };
      resolve(query);
      setTimeout(() => {
        db.close();
      });
    });
  });
};