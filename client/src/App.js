import logo from './logo.svg';
import './App.css';
import Routing from './routes';
import { BrowserRouter } from "react-router-dom";
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import AppProvider from './context/appProvider';

const socket = io('ws://localhost:3001/', { transports: ['websocket'] });

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect')
    });

    socket.on('disconnect', () => {
      console.log('disconnect')
    });

  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
