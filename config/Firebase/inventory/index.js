export const InventoryFirebaseFunctions = (db) => {
  return {
    getAllInventories: (uid) => {
      return db
        .collection("inventory")
        .where("uid", "==", uid)
        .orderBy("createdAt", "desc")
        .get()
        .then((data) => {
          let inventories = [];
          data.forEach((doc) => {
            const inventoryData = doc.data();
            inventories.push({
              id: doc.id,
              ...inventoryData,
            });
          });

          return inventories;
        })
        .catch((err) => {
          console.error(err);
        });
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
