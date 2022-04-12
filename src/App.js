import './App.css';
import { AppLogo } from '@lakinduhewawasam/first-workspace.ui.app-logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLogo
          width={375}
          height={800}
          characterHeight={400}
        />
      </header>
    </div>
  );
}

export default App;
