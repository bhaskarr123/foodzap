import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const [goToHome, setGoToHome] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#19d429" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center ">
            Order Successful!😊
          </h2>
          <p>Your order has been successfully placed</p>
        </div>
      )}

      {goToHome && <Navigate to="/" />}
    </div>
  );
};

export default Success;
