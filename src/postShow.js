import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state ={
            post : {},
            user : {},
            comments : []
        }
    }

    componentDidMount=()=>{
        const id = this.props.match.params.id 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        .then( (response) => {
            const post = response.data
            this.setState({post})

            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then( (response) => {
                const user = response.data
                this.setState({user})
            })
            .catch( (err) => {
                console.log(err)
            })   
        })

        .catch( (err) => {
            console.log(err)
        })  
        
        
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then( response => {
            this.setState ({ comments : response.data})
        })

        .catch( (err) => {
            console.log(err)
        })  

    }

    render(){
        return (
            <div style = {{backgroundColor:'aqua'}}>
                 <h1> UserName : {this.state.user.name}</h1>
                  <hr/>
                <h2> Title : {this.state.post.title}</h2>
                <h2> Body : {this.state.post.body}</h2>
                <hr/>
                <h2>Comments : </h2>
                <ul>
                    {
                        this.state.comments.map (function(ele,i){
                            return (
                                <li key ={i}> {ele.body} </li>
                            )   
                        })
                    }
                </ul>
                <hr/>
                <Link to = {`/users/${this.state.user.id}`}> More about Author -{this.state.user.name}</Link> &nbsp;
                <Link to ='/posts'><button> Goto Posts List</button></Link>
            </div>
        )
    }
}


export default PostShow