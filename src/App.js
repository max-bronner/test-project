import { fetchJson } from './utils/utils';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './pages/Page';
import Header from './components/Header/Header';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchJson('/data.json')
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {data.header && <Header content={data} />}
        <Switch>
          <Route path="/articles">
            <Page />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
