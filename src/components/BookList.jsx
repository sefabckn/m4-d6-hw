import React, { useState } from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

const BookList =(props)=> {
    /*
    state = {
        searchQuery: '',
        selectedBook: null
    }
    */
    const [state, setState] = useState({
        searchQuery: '',
        selectedBook: null
    })

        return (
            <Container>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search here"
                                        value={props.state.searchQuery}
                                        onChange={e => setState({ searchQuery: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            {
                                props.books.filter(b => b.title.toLowerCase().includes(state.searchQuery)).map(b => (
                                    <Col xs={3} key={b.asin} >
                                        <SingleBook
                                            book={b}
                                            selectedBook={props.state.selectedBook}
                                            changeSelectedBook={asin => useState({
                                                selectedBook: asin
                                            })} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <CommentArea asin={props.state.selectedBook} />
                    </Col>
                </Row>
            </Container>
        )
    

}

export default BookList