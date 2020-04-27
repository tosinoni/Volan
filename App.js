import React from "react";
import AppContainer from "./navigation";
import Firebase, { FirebaseProvider } from "./config/Firebase";
import UserProvider from "./providers/user";

export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <UserProvider>
        <AppContainer />
      </UserProvider>
    </FirebaseProvider>
  );
}
