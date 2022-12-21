import React from "react"
import { useEffect } from "react"
import "./App.css"
import { useApi } from "./Hooks/useApi"

import { AppRoutes } from "./routes/Routes"
import useUser from "./Estados/useUser"

function App() {

  const api = useApi();
  const setUser = useUser(state => state.setUser);

  const getToken = async () => {
    const storageData = localStorage.getItem("authToken");
    if(storageData){
      await api.getUserbyToken(storageData).then((response) => setUser(response.user))
    }
  }

  useEffect(() => {
    getToken();
  }, [])
  
  return (
    <AppRoutes/>
  )
}

export default App