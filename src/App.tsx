import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import RouterComponent from './RouterComponent';

function App() {
  const appCtx = useSelector((state: any) => state.app)
  console.log(appCtx)
  return (
    <Router>
      <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme={appCtx.isDarkMode ? "dark" : "light"}
                toastStyle={
                    appCtx.isDarkMode
                        ? {
                            backgroundColor: "#27272A",
                            color: "#E2E8F0",
                        }
                        : { backgroundColor: "#F8FAFC", color: "#1F2937" }
                }
            />
      <RouterComponent />
      
    </Router>
  );
}

export default App;
