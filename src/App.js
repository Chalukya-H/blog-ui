import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import './App.css';
import Home from './home'
import Users from './users'
import UserShow from './userShow'
import Posts from './posts'
import PostShow from './postShow'

function App() {
  return (
     <BrowserRouter>
     <div style = {{backgroundColor:'black' }}>
         <Link to ='/'  style ={{fontSize:'30px',color:'white'}} > <button> Home</button></Link> 
         <Link to='/users'  style ={{fontSize:'30px',color:'white'}} ><button> Users</button></Link> 
         <Link to='/posts'  style ={{fontSize:'30px',color:'white'}} ><button> Posts</button> </Link> 


         <Route path = "/" component = {Home} exact = {true}/>
         <Route path = "/users" component = {Users} exact = {true}/>
         <Route path = "/posts" component = {Posts} exact = {true}/>
         <Route path = "/users/:id" component = {UserShow} exact = {true}/>
         <Route path = "/posts/:id" component = {PostShow} exact = {true}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
