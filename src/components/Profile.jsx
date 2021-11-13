import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Profile = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>{isLoading ? <Loading /> : <h1> This is Profile Component</h1>}</div>
  );
};

export default Profile;
