import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state ={
            user : {},
            posts :[]

        }
    }

    componentDidMount=()=>{
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then ( (response)=>{
                this.setState ( { posts: response.data})
        })

        .catch( err => {
            console.log(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        .then( (response) => {
            const user = response.data
            this.setState({user})
        })
        .catch( (err) => {
            console.log(err)
        })    

    }

    render(){
        return (
            <div style = {{backgroundColor:'aqua'}}>
                 <h1>Username : {this.state.user.name}</h1>
                <h3>Posts written by user: </h3>
                <ul>
                    {
                        this.state.posts.map(function(post) {
                            return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>

            </div>
        )
    }
}


export default UserShow