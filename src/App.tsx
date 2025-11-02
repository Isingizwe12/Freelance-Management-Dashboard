import { AppProvider } from './context/AppProvider'
import Dashboard from './components/Dashboard' // placeholder

function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}

export default App;
