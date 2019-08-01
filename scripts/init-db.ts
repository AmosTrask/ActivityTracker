require("dotenv").config();

import * as fs from "fs";
import { Db, ObjectID } from "mongodb";
import { MongoDB } from "../src/providers/mongodb";

export async function initDb() {
  const db: Db = await MongoDB.Instance.getClient();

  await initData(db, "users", "data/users.json");
}

async function initData(db: Db, collectionName: string, filePath?: string) {
  return new Promise(async (resolve, reject) => {
    if (filePath) {
      fs.readFile(filePath, async (err, JsonData) => {
        const data: any[] = JSON.parse(JsonData.toString());

        data.map((elem) => {
          if (elem._id) {
            elem._id = new ObjectID(elem._id);
          }
          return elem;
        });

        const collection = db.collection(collectionName);
        await collection.deleteMany({});
        await collection.insertMany(data);
        resolve();
      });
    } else {
      const collection = db.collection(collectionName);
      await collection.deleteMany({});
      resolve();
    }
  });
}
