import React, { useState } from 'react';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import EmployeeCardList from './components/EmployeeCardList';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sorted, setSorted] = useState(false);
  const [data, setEmployees] = useState(employees);

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value)
  };

  function handleSortByName() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
    }
  };

  function handleSortByDepartment() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.department > b.department) ? -1 : 1));
      setSorted(false);
    }
  };

  const filteredEmployees = data.filter(employee => employee.name.toLowercase().startsWith(searchTerm.toLowerCase()));
  return (
    <>
      <Header />
      <Layout>
        <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
        <p className="mb-16 text-md">Search For An Emplooye or Sort By Name</p>
          <NavBar 
            onSearch={handleSearchTerm}
            searchTerm={searchTerm}
            handleSortByName={handleSortByName}
            handleSortByDepartment={handleSortByDepartment}
          />
          <EmployeeCardList data={filteredEmployees} />
          <Footer />
      </Layout>
    </>
  )




}


export default App;
