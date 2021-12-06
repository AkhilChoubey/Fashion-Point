import React, { useState, useEffect } from "react";
import Loading from "../Loading";

const ResetPassword = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      {isLoading ? <Loading /> : <div> This is reset Password component.</div>}
    </>
  );
};

export default ResetPassword;
