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
    setFilterData(filteredData);
  }
  if (loading) {
    return <h2> Loading</h2>;
  } else {
    return (
      <div id="container">
        <div id="content">
          <h1 id="title">Users</h1>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search users..."
          />
          <button onClick={handleSearch}>Search</button>
          <ul id="userlist">
            {filterData.map((elem) => (
              <div key={elem.id} id="users">
                <li>Name: {elem.name}</li>
                <li>Email: {elem.email}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Users;
