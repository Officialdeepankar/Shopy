import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";


// question-1) what context means?
// ans- Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

const AuthContext = createContext();


 // The authentication state (auth) and the setter function (setAuth) are passed down to child components through the AuthContext.Provider.

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({// auth and setauth are the global states , which can be acced by useuth;
    user: null,
    token: "",
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;
 

  useEffect(() => {// it will help setauth to read data from local storage in the real time ;
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};



// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };


