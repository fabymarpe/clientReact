/**
 * Created by fabymarpe on 7/27/18.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Form, Row, Col, FormGroup } from 'reactstrap';
import { userActions } from '../../actions/user';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());
        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleLogin(e) {
        e.preventDefault();
        this.setState({submitted: true});
        const {email, password} = this.state;
        const {dispatch} = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    render() {
        const { email, password, submitted } = this.state;
        const { alert } = this.props;
        return (
            <Col className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h2>Login</h2>
                    <Form name="form" onSubmit={this.handleLogin}>
                        <FormGroup className={(submitted && !email ? ' has-error' : '')}>
                            <Row>
                                <Col>
                                    <label htmlFor="email">email</label>
                                </Col>
                                <Col>
                                    <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                                    {submitted && !email &&
                                    <span className="text-danger">Email is required.</span>
                                    }
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className={(submitted && !password ? ' has-error' : '')}>
                            <Row>
                                <Col>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                    <span className="text-danger">Password is required.</span>
                                    }
                                </Col>
                                {alert.message &&
                                <Col>
                                    <span className={alert.type}>{alert.message}</span>
                                </Col>
                                }
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary">Login</Button>
                        </FormGroup>
                    </Form>
                </Jumbotron>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login};