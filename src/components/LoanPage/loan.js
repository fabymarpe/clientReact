/**
 * Created by fabymarpe on 7/27/18.
 */
import React from 'react';
import { Nav, NavItem, NavLink, Row, Col, Button} from 'reactstrap';
import { connect } from 'react-redux';

import { Business }  from './business';
import { Owner } from './owner';
import Decision  from './decision';
import {alert} from "../../actions/alert";
import {apiComunication} from "../../services/api";
import {userActions} from "../../actions/user";


class Loan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleGoToStep = this.handleGoToStep.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleGoToStep(tabSelected, data) {
        const { dispatch } = this.props;
        let loan = this.state.loan;
        switch(tabSelected){
            case 1:
                if(data)
                    loan.owner = data;
                else
                    loan = {business: null, owner: null, status: ''};
                this.setState({loan: loan});
                break;
            case 2:
                loan.business = data;
                this.setState({ loan: loan });
                break;
            case 3:
                loan.owner = data;
                this.setState({ loan: loan });
                apiComunication.post('loan', this.state.loan).then((result) => {
                    let responseJson = result;
                    if (200 === responseJson.code) {
                        loan.status = responseJson.msg;
                        this.setState({ loan: loan});
                    } else{
                        dispatch(alert.error(responseJson.msg));
                    }
                }, error => {
                    dispatch(alert.error(error));
                });
                break;
            default:
                tabSelected = 1;
        }
        this.setState({tabSelected: tabSelected});
    }

    handleLogout(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }

    static getDerivedStateFromProps(props, state) {
        let loan = {business: null, owner: null, status: ''};
        return {
            tabSelected: 1,
            loan: loan,
            login: props.login.user
        }
    }

    render() {
        return (
            <Col className="col-md-8 col-md-offset-2">
                <Row>
                    <Col md="12" className="text-right">
                        <Button color="primary" onClick={this.handleLogout}>Logout</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav tabs>
                            <NavItem>
                                <NavLink disabled={this.state.tabSelected !== 1} active={this.state.tabSelected === 1}>
                                    Business
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled={this.state.tabSelected !== 2} active={this.state.tabSelected === 2}>
                                    Owner
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled={this.state.tabSelected !== 3} active={this.state.tabSelected === 3}>
                                    Loan Decision
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <br/>
                <Row>
                    { this.state.tabSelected === 1 &&
                    <Col>
                        <Business handleGoToStep={this.handleGoToStep} business={this.state.loan.business}/>
                    </Col>
                    }
                    { this.state.tabSelected === 2 &&
                    <Col>
                        <Owner handleGoToStep={this.handleGoToStep} owner={this.state.loan.owner}/>
                    </Col>
                    }
                    { this.state.tabSelected === 3 &&
                    <Col>
                        <Decision handleGoToStep={this.handleGoToStep} loan={this.state.loan} user={this.state.login}/>
                    </Col>
                    }
                </Row>
            </Col>
        )
    }
}

function mapStateToProps(state){
    const { login } = state;
    return {
        login
    }
}

const connectedLoan = connect(mapStateToProps)(Loan);
export { connectedLoan as Loan }