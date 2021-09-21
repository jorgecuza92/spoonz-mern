import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { EnergyExpenses } from './components/EnergyExpenses';
import { EnergyList } from './components/EnergyList';
import { AddSpoon } from './components/AddSpoon';
import Card from '@material-ui/core/Card';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Card className='card'>
        <Header />
        <div className="container">
          <Balance />
          <EnergyExpenses />
          <EnergyList />
          <AddSpoon />
        </div>
      </Card>
    </GlobalProvider>
  );
}

export default App;
