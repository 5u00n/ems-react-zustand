import './App.css';

import React from 'react';

import { useSettingStore } from './store/store';
import Navigation from './components/Navigation';

import SideBar from './components/SideBar';
import Footer from './components/Footer';
import SideBarMobile from './components/SideBarMobile';

function App() {


  const dark = useSettingStore((state) => state.dark);

  return (
    <div className="App flex flex-col min-h-screen" data-theme={dark ? "dark" : "light"}>

      <SideBarMobile />

      <main className="w-screen flex-grow flex overflow-auto">
        <SideBar className="flex-1" />
        <div className='flex flex-col justify-between flex-1'>
          <div className="sticky top-0">
            <Navigation />
          </div>

          <h1>React Zustand</h1>

          <div className="md:sticky bottom-0">
            <Footer />
          </div>
        </div>
      </main>


    </div>
  );
}

export default App;