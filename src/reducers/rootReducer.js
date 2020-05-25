const initState={
    posts:[
        {'id':1,'title':'first title','body':'first body'},
        {'id':2,'title':'second title','body':'second body'},
        {'id':3,'title':'third title','body':'third body'},
    ]
}
const rootReducer=(state=initState,action)=>{
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>{
           return post.id !== action.id
        })
        return {
            ...state,
            posts : newPosts
        };
    }
    return state;

}

export default rootReducer;