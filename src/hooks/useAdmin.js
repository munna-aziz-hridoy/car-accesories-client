import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/isAdmin?email=${email}`;
    axios.get(url).then((data) => setIsAdmin(data.data.isAdmin));
  }, [email]);
  return [isAdmin];
};

export default useAdmin;
