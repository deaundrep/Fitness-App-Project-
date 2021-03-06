import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import green  from "@material-ui/core/colors/green";
import { BrowserRouter as Router } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import MainRouter from "./MainRouter";
import React from "react";






const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
      contrastText: "#ffeb3b",
    },
    secondary: {
      main: "#ffeb3b",
      contrastText: "black",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(","),
  },
  spacing: 10,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <MainRouter />
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
