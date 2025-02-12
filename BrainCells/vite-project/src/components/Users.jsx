/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(e) {
    setSearchData(e.target.value);
  }

  function handleSearch() {
    let filteredData = userData.filter((elem) =>
      elem.name.toLowerCase().includes(searchData.toLowerCase())
    );
   
    if(filteredData.length < 1){
      setSearchData("")
       alert("User not found")
    }
    setSearchData("")
    setFilterData(filteredData);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="container">
      <div id="content">
        <h1 id="title">Users</h1>
        <div id="btn">
          <input type="text" value={searchData} onChange={handleChange} placeholder="Search users..." />
          <button onClick={handleSearch}>Search</button>
        </div>
        {filterData.length > 0 ? (
          <ul id="userlist">
            {filterData.map((elem) => (
              <li key={elem.id}>
                <p>Name: {elem.name}</p>
                <p>Email: {elem.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div id="userlist">

          <h1>User not found..!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
