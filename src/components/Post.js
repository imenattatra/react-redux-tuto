import React,{Component} from 'react';
import { connect } from 'react-redux';
import {deletePost} from '../actions/postActions'
class Post extends Component{

    
    handleClick=()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }

    render(){

        const post = this.props.post ? (
            <div className="post">
                <h4 className="cente">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete post
                    </button>
                </div>
            </div>
        ) : (
            <div>Loading post...</div>
        )

        return(
            <div className="container">
                <h4>{this.props.id}</h4>
                {post}
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    let id = ownProps.match.params.post_id
    console.log(id)
    return{
        post: state.posts.find(post => post.id == id)
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{

        deletePost:(id)=>{
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post); //connect is a higher order component