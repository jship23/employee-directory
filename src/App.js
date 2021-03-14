import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header/header";
import Table from "./components/Table/table"
import API from "./utils/API";
import Search from "./components/Search/search";

function App() {
  const [employees, setEmployees] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  useEffect(() => {
    API.getEmployees().then(res => {
      setEmployees(res.data.results)
      console.log(res.data.results)
    })
  }, [])

  function handleInputChange(e) {
    setSearchValue(e.target.value)

  }

  function handleFormSubmit(e) {
    setNameFilter(searchValue)
    e.preventDefault()
  }

  return (

    <div>
      <Header />
     
      <Search searchValue={searchValue} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
          
      <Table results={employees} nameFilter={nameFilter} />
     
    </div>

  );
}

export default App;