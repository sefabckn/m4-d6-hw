import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ()=> {
    /*
    state = {
        comments: [], // comments will go here
        isLoading: false,
        isError: false
    }
    */
    const [comments, setComments] = useState([]) // comments will go here
    // isLoading: false,
    //isError: false
    const [isLoading, setLoading] = useState(false)
    const[isError, setError] = useState(false)
    
    
    
    useEffect( async(prevProps)=>
    {
         {
             useState({
                isLoading: true
            })
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.asin, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
                    }
                })
                console.log(response)
                if (response.ok) {
                    let comments = await response.json()
                    useState({ comments: comments, isLoading: false, isError: false })
                } else {
                    console.log('error')
                    useState({ isLoading: false, isError: true })
                }
            } catch (error) {
                console.log(error)
                useState({ isLoading: false, isError: true })
            }
        }
    }
    )  


        return (
            <div>
                {props.setLoading && <Loading />}
                {state.setError && <Error />}
                <AddComment asin={props.asin} />
                <CommentList commentsToShow={state.comments} />
            </div>
        )
   
}

export default CommentArea