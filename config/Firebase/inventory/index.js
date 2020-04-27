import { db } from "../firebase";

export const InventoryFirebaseFunctions = (db) => {
  return {
    getAllInventories: (uid) => {
      return db.collection("inventory").where("uid", "==", uid);
    },

    addInventory: (inventoryData) => {
      return db.collection("inventory").doc().set(inventoryData);
    },

    updateInventory: (id, inventoryData) => {
      return db.collection("inventory").doc(id).update(inventoryData);
    },

    deleteInventory: () => {
      // return firebase.auth().signInWithEmailAndPassword(email, password);
    },
  };
};
