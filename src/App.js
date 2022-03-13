import './App.css';
import GameProvider from './components/GameProvider';
import GameScreen from './components/GameScreen';
import RulesProvider from './components/RulesProvider';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <RulesProvider>
          <GameScreen />
        </RulesProvider>
      </GameProvider>
    </div>
  );
}

export default App;
