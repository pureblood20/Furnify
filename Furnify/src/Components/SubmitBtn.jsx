/* eslint-disable react/prop-types */

import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ label }) => {
  const navigate = useNavigation();

  const isLoading = navigate.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="loading loading-spinner">loading...</span>
      ) : (
        label
      )}
      {/* {label} */}
    </button>
  );
};

export default SubmitBtn;
