import {ADD_POST} from "../actions/index";

const INITIAL_STATE = {
    posts : [
        { id: 1, title: "Avengers End Game", desc:"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures"}
    ]
};

function rootReducer(state = INITIAL_STATE, action) {
    console.log(state, "State");
    
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts,
                 {title: action.title, id:action.id,desc:action.desc}
            ]}
        default:
            return state
    }
}

export default rootReducer