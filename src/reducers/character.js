import { FETCH_DATA } from "../actions/index"


function character(state = [], action) { 
    switch (action.type) {
        case FETCH_DATA :
            return [...action.payload]
            
        default:
            return state
    }
}

export default character
      // case ADD_POST:
        //     return {...state, posts: [...state.posts,
        //          {title: action.title, id:action.id,desc:action.desc}
        //     ]}