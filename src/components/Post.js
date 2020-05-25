import React,{Component} from 'react';
import axios from 'axios';

class Post extends Component{

    state = {
        post:null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => {
            this.setState({
                post:res.data
            })
        })

    }
    render(){


        const post = this.state.post ? (
            <div className="post">
                <h4 className="cente">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div>Loading post...</div>
        )

        return(
            <div className="container">
                <h4>{this.state.id}</h4>
                {post}
            </div>
        )
    }
}

export default Post;