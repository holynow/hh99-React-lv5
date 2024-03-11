import axios from "axios";

export const login = async (id, password) => {
  const {data} = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
    id,
    password,
  });
  return data;
};

export const signup = async (id, password) => {
  const {data} = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/register`,
    {
      id,
      password,
    }
  );
  return data;
};

