import React from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../helpers/history';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import    { Login }   from './LoginPage/login';
import Loan  from './LoanPage/loan'

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            console.log(location)
            // clear alert on location change
            //dispatch(alertActions.clear());
        });
    }

    render() {
        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Router history={history}>
                            <Col>
                                <Route exact path="/" component={Login} />
                                <Route path="/loan" component={Loan} />
                            </Col>
                        </Router>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default App;