import React, { useState } from "react";
import PrivateLayout from "layouts/PrivateLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider, InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
// import { createHttpLink } from "@apollo/client";
import { UserContext,  } from "context/userContext";
import Index from "pages/Index";
import Page2 from "pages/Page2";
import IndexCategory1 from "pages/category1/Index";
import Category1 from "pages/category1/CategoryPage1";
import IndexUsuarios from "pages/usuarios";
import "styles/globals.css";
import "styles/tabla.css";



const client = new ApolloClient({
  uri:'https://neklo.herokuapp.com/graphql',
  cache: new InMemoryCache(),

})

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client={client}>

        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrivateLayout />}>
                <Route path="" element={<Index />} />
                <Route path="/usuarios" element={<IndexUsuarios />} />
                <Route path="page2" element={<Page2 />} />
                <Route path="category1" element={<IndexCategory1 />} />
                <Route path="category1/page1" element={<Category1 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
