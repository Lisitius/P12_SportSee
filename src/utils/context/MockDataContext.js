/**
 * Create a React context with a default value for 'useMock' and a 'setUseMock' function.
 * This context is used to control whether mock data should be used in the application.
 *
 * @type {React.Context<{useMock: boolean, setUseMock: function}>}
 */

import React from "react";

export const MockDataContext = React.createContext({
  useMock: false,
  setUseMock: () => {},
});
