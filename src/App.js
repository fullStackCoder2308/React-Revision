import logo from './logo.svg';
import './App.css';
import Video from './components/Video';
import videos from './data/data'
function App() {
  
  return (
    <>

      {/* We can pass props in any order  */}
      {/* <Video verified={true} title="ReactJS" channel="Sanskar" views="1k" time="1 year"></Video>
      <Video verified={false} title="NodeJS" channel="Sanskar" views="10k" time="2 year"></Video> */}

      {/* in the below component we use obj to pass props */}
      {/* <Video {...obj}></Video> */}


      {/* instead of using Video component thrice we can use map function  */}
      {
        videos.map((video) => (
          <Video
          key={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
          ></Video>
        ))
      }


    </>
  );
}

export default App;
