import React, {useState} from 'react';
export type Auth = {
    state?:{
        auth: any,
        user?:any
        
    },
    actions?: {
        login: (userData: any) => void,
        logout: () => void,
    }
};
export const AuthContext =React.createContext<Auth>({
  state:{auth : undefined},
  actions: {login: () => {} , logout: () => {}},
  
});

export const AuthProvider = (props:any) => {
  const {children} = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData:any) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContext = {
    state: {
      auth,
     
      },
        actions:{
             login,
      logout,
        },
  };

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  );
};
