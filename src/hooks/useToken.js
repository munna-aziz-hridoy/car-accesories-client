import { useEffect, useState } from "react";
const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const res = await fetch("http://localhost:5000/getToken", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setToken(data.accessToken);
    };

    if (email) {
      getToken();
    }
  }, [email]);

  return [token];
};

export default useToken;
