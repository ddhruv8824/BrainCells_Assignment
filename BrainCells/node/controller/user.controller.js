/** @format */

import axios from "axios";
import "dotenv/config";

const fetchUsers = async () => {
  try {
    const response = await axios.get(process.env.API);
    return response.data;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch the data");
  }
};

const getAllUsers = async (req, res) => {
  try {
    let users = await fetchUsers();
    const { name, sort } = req.query;

    if (name) {
      const lowerCaseName = name.toLowerCase();
      users = users.filter((user) =>
        user.name.toLowerCase().includes(lowerCaseName)
      );
    }

    if (sort === "asc") {
      users.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sort === "desc") {
      users.sort((a, b) => (a.name < b.name ? 1 : -1));
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { fetchUsers, getAllUsers };
