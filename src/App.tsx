import { useRoutes } from 'react-router-dom';
import { Routes } from './routes/Routes';

import './App.scss';

const App = () => {
  const prepareRoutes = useRoutes(Routes);

  return <div className='App'>{prepareRoutes}</div>;
};

export default App;
