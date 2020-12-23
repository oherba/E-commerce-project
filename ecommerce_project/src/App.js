import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Switch, Route , Link} from 'react-router-dom'

// const HomePage = (props)=>{
//   console.log(props)
//   return (
//     <div>
//       <button onClick={()=> props.history.push('/topics')}> Tpoics</button>
//       {/* <Link to='/topics'>topics</Link> */}
//       <h1>Home page</h1>
//     </div>
//   )
//   }

//   const TopicList = (props)=>{
//     console.log(props)
//     return (
//       <div>
//         <h1>TopicList</h1>
//         <Link to={`${props.match.url}/13`}> to topic 13</Link>
//         <Link to={`${props.match.url}/37`}> to topic 37</Link>
//         <Link to={`${props.match.url}/42`}> to topic 42</Link>
//       </div>
//     )
//     }

//     const TopicDetail = (props)=>{
//       console.log(props)
//       return (
//         <div>
//           <h1>TopicDetail: {props.match.params.topicId}</h1>
//         </div>
//       )
//       }

const PhonesPage = () => (
  <div>
    <h1>PhonesPage</h1>
  </div>
);

function App() {
  return (
    <div className="App">
    <Switch>
      <Route  exact path='/' component={HomePage}/>
      <Route  path='/phones' component={PhonesPage}/>
      {/*<Route exact path='/blogo/kikx/topics' component={TopicList}/>
      <Route path='/blogo/kikx/topics/:topicId' component={TopicDetail}/>
      <Route exact path='/blogo/topics' component={TopicList}/>
      <Route path='/blogo/topics/:topicId' component={TopicDetail}/> */}
    </Switch>
   
    </div>
  );
}

export default App;
