import "normalize.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Header from "./components/header/header.jsx"
import Logomark from "./components/logomark/logomark.jsx";
import Logotype from "./components/logotype/logotype.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header logged={true} />
    <Logotype size={"large"} />
    <Logotype size={"medium"} />
    <Logomark size={"large"} />
    <Logomark size={"medium"} />
  </StrictMode>
);
