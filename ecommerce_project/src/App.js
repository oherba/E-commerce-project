import logo from './logo.svg';
import './App.css';
// import HomePage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom'

const HomePage = (props)=>{
  console.log(props)
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
  }

  const TopicList = (props)=>{
    console.log(props)
    return (
      <div>
        <h1>TopicList</h1>
      </div>
    )
    }

    const TopicDetail = (props)=>{
      console.log(props)
      return (
        <div>
          <h1>TopicDetail: {props.match.params.topicId}</h1>
        </div>
      )
      }
function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/topics' component={TopicList}/>
      <Route path='/topics/:topicId' component={TopicDetail}/>
    </Switch>
   
    </div>
  );
}

export default App;
