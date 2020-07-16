import React from "react";
import Productlistmain from "./components/Productlistmain";
import Layout from "./components/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faTimesCircle, faPlusCircle);

function App() {
  return (
    <Layout>
      <Productlistmain />
    </Layout>
  );
}

export default App;
