import { AsyncStorage } from "react-native";

const Storage = {
  setIsNewUser: isNewUser => {
    AsyncStorage.setItem("Volan: isNewUser", `${isNewUser}`);
  },
  isNewUser: () => {
    AsyncStorage.getItem("Volan: isNewUser");
  }
};

export default Storage;
