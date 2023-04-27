import './App.css';
import Landing from './Components/Landing';
import { TopicProvider } from './Context/TopicContext';

function App() {

  return (
    <div className="App">
      {/* Provide topics from api to children components using context/state storage */}
      <TopicProvider>
        <Landing/>
      </TopicProvider>
    </div>
  );
}

export default App;
