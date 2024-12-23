import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import RepositoryList from './components/RepositoryList/RepositoryList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <RepositoryList />
    </div>
  );
}

export default App;
