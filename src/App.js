import './App.css';
import LikeButton from './LikeButton.jsx';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <LikeButton liked={true} likeCount={5}/>
    </div>
  );
}

export default App;
