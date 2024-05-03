import './App.css';

import React from 'react';

import { useSettingStore } from './store/store';
import Navigation from './components/Navigation';

import SideBar from './components/SideBar';
import Footer from './components/Footer';


function App() {


  const dark = useSettingStore((state) => state.dark);

  return (
    <div className="App" data-theme={dark ? "dark" : "light"}>
      <Navigation />

      <main className="w-screen inline-flex flex-grow">
        <SideBar className="flex-1" />
        <div className='flex-1 mt-16'>
          <h1>React Zustand</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;