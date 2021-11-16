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
    const [state, setState] = useState({
        comments: [], // comments will go here
        isLoading: false,
        isError: false
    })


    useEffect((prevProps, props)=>
    {
         {
             setState({
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
                    setState({ comments: comments, isLoading: false, isError: false })
                } else {
                    console.log('error')
                    setState({ isLoading: false, isError: true })
                }
            } catch (error) {
                console.log(error)
                setState({ isLoading: false, isError: true })
            }
        }
    }
    )  


        return (
            <div>
                {props.isLoading && <Loading />}
                {state.isError && <Error />}
                <AddComment asin={props.asin} />
                <CommentList commentsToShow={state.comments} />
            </div>
        )
   
}

export default CommentArea