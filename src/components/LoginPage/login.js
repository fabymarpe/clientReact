/**
 * Created by fabymarpe on 7/27/18.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Form, Container, Row, Col, FormGroup } from 'reactstrap';
import { apiComunication } from '../../services/api';
import { userActions } from '../../actions/user';
import { history } from '../../helpers/history';

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
            let data = {email: email, password: password};
            apiComunication.post('login', data).then((result) => {
                let responseJson = result;
                if (200 === responseJson.code) {
                    let user = responseJson.msg;
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log(localStorage.getItem('user'));
                    history.push('/loan');
                    //dispatch(success(user));
                } else{
                    console.log(responseJson.msg);
                }
            }, error => {
                //dispatch(failure(error));
                //dispatch(alertActions.error(error));
            });
        }
    }

    render() {
        const { email, password, submitted } = this.state;
        return (
            <Col md={{ size: 8, offset: 2 }}>
                <h2>Login</h2>
                <Form name="form" onSubmit={this.handleLogin}>
                    <FormGroup className={(submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">email</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                        <div className="help-block">Email is required</div>
                        }
                    </FormGroup>
                    <FormGroup className={(submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                        }
                    </FormGroup>
                    <FormGroup>
                        <button className="btn btn-primary">Login</button>
                    </FormGroup>
                </Form>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    state.service = {};
    const { loggingIn } = state.login;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login};