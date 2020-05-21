import React, { Component } from 'react';

class AddTodo extends Component{

    state={
        content:''
    }
    handleChhange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Add new Todo</label>
                    <input type="text" id="content" onChange={this.handleChhange} value={this.state.content}/>
                </form>
            </div>
        )
    }

}
export default AddTodo