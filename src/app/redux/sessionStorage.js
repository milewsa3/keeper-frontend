export const loadSessionState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  }
  catch (error) {
    return undefined;
  }
};

export const saveSessionState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  }
  catch (error) {
    // Ignore write errors.
  }
};