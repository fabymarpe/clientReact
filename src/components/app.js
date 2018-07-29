import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../helpers/history';
import { Container, Row } from 'reactstrap';
import { Login }   from './LoginPage/login';
import { Loan }  from './LoanPage/loan'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <br/>
                <Router history={history}>
                    <Row>
                        <Route exact path="/" component={Login} />
                        <Route path="/loan" component={Loan} />
                    </Row>
                </Router>
            </Container>
        );
    }
}

export default App;