import React, { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FilterBar from "./components/FilterBar";
import Recipies from "./components/Recipies";
import Loading from "./components/Loading";
import RecipeDetail from "./pages/RecipeDetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("lunch");
  const [loading, setLoading] = useState(false);

  // re fetch when search query is updated
  useEffect(() => {
    fetchData();
  }, [query]);

  // fetching data from api
  const fetchData = async () => {
    const app_id = "4e9f05eb";
    const api_key = "9b904d703fa0d46a88ce1ac63f29f498";
    const count = "15";

    let response = await fetch(
      `https://api.edamam.com/search?q=${query}&to=${count}&app_id=${app_id}&app_key=${api_key}`
    );
    let data = await response.json();
    setData(data.hits);
    setLoading(!loading);
  };

  // get search query from search bar
  const getQuery = (query) => {
    setQuery(query);
    setLoading(!loading);
  };

  return (
    <div>
      <Router>
        <Nav />

        <FilterBar query={getQuery} />

        <Switch>
          <Route
            exact="true"
            path="/"
            exact
            render={() => (loading ? <Recipies data={data} /> : <Loading />)}
          />

          <Route
            path="/RecipeDetail/:recipe"
            render={(props) => (
              <RecipeDetail title={props.match.params.recipe} />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
