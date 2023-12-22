import logo from './logo.svg';
import './App.css';
import Video from './components/Video';
function App() {
  let obj = {
    title:"MongoDb",
    channel:"Sanskar",
    views:"10K",
    time:"1.5 Years"
  }
  return (
    <>

      {/* We can pass props in any order  */}
      <Video title = "ReactJS" channel="Sanskar" views="1k" time="1 year"></Video>
      <Video title = "NodeJS" channel="Sanskar" views="10k" time="2 year"></Video>

      {/* in the below component we use obj to pass props */}
      <Video {...obj}></Video>
    </>
  );
}

export default App;
