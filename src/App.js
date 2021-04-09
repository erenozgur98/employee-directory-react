import React, { useState } from 'react';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import EmployeeCard from './components/EmployeeCard';
import EmployeeCardList from './components/EmployeeCardList';
import './App.css';


function App() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ sorted, setSorted ] = useState(false);
  const [ data, setEmployees ] = useState(employees);

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value)
  }

  function handleSortByName() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1 ));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1 ));
      setSorted(false);
      
    }
  }


}


export default App;
