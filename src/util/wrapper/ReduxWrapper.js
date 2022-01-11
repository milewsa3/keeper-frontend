import React from "react";
import PropTypes from "prop-types";

const ReduxWrapper = ({ state, errorMessage, loadingMessage, ...rest }) => {
  return (
    <>
      {state.error ? (
        <>{errorMessage ? errorMessage : "Error"}</>
      ) : (
        <>
          {state.loading ? (
            <>{loadingMessage ? loadingMessage : "Loading"}</>
          ) : (
            <>{rest.children}</>
          )}
        </>
      )}
    </>
  );
};

ReduxWrapper.propTypes = {
  state: PropTypes.object.isRequired,
};

export default ReduxWrapper;
