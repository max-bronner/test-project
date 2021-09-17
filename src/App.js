import { fetchJson } from './utils/utils';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TextInput from './components/Form/TextInput/TextInput';
import Checkbox from './components/Form/Checkbox/Checkbox';
import RadioButton from './components/Form/RadioButton/RadioButton';
import FormWrapper from './components/Form/FormWrapper';

import Page from './pages/Page';
import Header from './components/Header/Header';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchJson('/data.json').then((data) => setData(data));
  }, []);

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {data.header && <Header content={data} />}
        <Switch>
          <Route path="/articles">
            <Page />
          </Route>
        </Switch>
        <FormWrapper formType="contact" url="/submit" onSubmit={handleFormSubmit}>
          <TextInput label="Name" name="name" />
          <Checkbox label="Subscribe" name="subscribe" />
          <RadioButton label="Interval" name="interval" />
        </FormWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
