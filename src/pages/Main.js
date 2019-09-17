import React from 'react'
import {connect} from "react-redux"
import Form from "../components/Form"

function Main({posts}) {
    console.log(posts, "posts");
    return (
        <div>
           {/* {posts.map((data, index) => (
               <ul key={index}>
                    <li>{data.title}</li>
               </ul>
           ))} */}
           <Form/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Main)