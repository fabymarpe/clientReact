import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { Jumbotron, Button, Form, Container, Row, Col, FormGroup } from 'reactstrap';
//import { alertActions } from '../_actions';
//import { PrivateRoute } from '../_components';
//import GoogleMap from "../_components/GoogleMap";
import    { Login }   from './LoginPage/login';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const { alert } = this.props;
        return (
            <Jumbotron>
                <Container>
                    <Row>
                            <Col>
                                <Login/>
                            </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default App;