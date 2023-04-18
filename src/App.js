import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Form from './components/form';
import List from './components/list';
import Forecast from './components/forecast';
import Menu from './components/menu';

function App() {

  const forecast = {
    temp : "25",
    forecast : "Nublado"
  }

  return (
    <div className="App">
      <Header />
      <Forecast temp={forecast.temp} forecast={forecast.forecast} />
      <Form />
      <Menu />
      <List />
    </div>
  );
}

export default App;
