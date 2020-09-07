import { User } from "firebase";
import React, { createContext, useEffect, useState } from "react";
import firebase from "./firebase";

type typeAuthContext = {
  currentUser: User | null | undefined;
};

const AuthContext = createContext<typeAuthContext>({ currentUser: undefined });

const AuthProvider: React.FC = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
