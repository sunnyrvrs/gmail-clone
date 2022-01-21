import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SendMail from './SendMail';
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { useDispatch } from 'react-redux';
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {    
    auth.onAuthStateChanged((user) => {
      //the user is logged in
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
