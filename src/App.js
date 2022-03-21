import React from 'react';
// import HigherOrderFunctions from './components/hof/HigherOrderFunctions';
import './App.css';
import FilterAge from './components/FilterAge';
import FilterLetter from './components/FilterLetter';
import HigherOrderComponent from './components/HigherOrderComponent';
import TotalExp from './components/TotalExp';
import UserType from './components/UserType';

function App() {
  return (
    <div className="App">
    {/* <HigherOrderComponent></HigherOrderComponent> */}
    {/* <UserType></UserType> */}
    {/* <FilterLetter></FilterLetter> */}
    {/* <FilterAge></FilterAge> */}
    <TotalExp></TotalExp>
    </div>
  );
}

export default App;