/**
 * Created by fabymarpe on 7/24/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container} from 'reactstrap';
import {alert} from "../../actions/alert";

class Owner extends React.Component{
    constructor(props){
        super(props);
        if(this.props.owner)
            this.state = this.props.owner;
        else
            this.state = {socSecNumber: '', name: '', email: '', address: '', city: '', state: '', postalCode: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBackStep = this.handleBackStep.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event){
        event.preventDefault();
        const { dispatch } = this.props;
        const {socSecNumber, name, email, address, city, state, postalCode} = this.state;
        if(socSecNumber && name && email && address && city && state && postalCode) {
            this.props.handleGoToStep(3, this.state);
            dispatch(alert.clear())
        } else{
            dispatch(alert.error('All fields are required.'))
        }
    }

    handleBackStep(){
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(alert.clear())
        this.props.handleGoToStep(1, this.state);
    }

    render() {
        const { alert } = this.props;
        return <Col md="12">
            {alert.message &&
            <FormGroup>
                <Row>
                    <Col md={12}>
                        <h4 className="text-danger">{alert.message}</h4>
                    </Col>
                </Row>
            </FormGroup>
            }
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="socSecNumber">Social Security Number: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="socSecNumber" id="socSecNumber" placeholder="Social Security Number"
                                           value={this.state.socSecNumber} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="name">Name: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name}
                                           onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="email">Email: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email}
                                           onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="address">Address: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="address" id="address" placeholder="Address" value={this.state.address}
                                           onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="city">City: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="city" id="city" placeholder="City" value={this.state.city}
                                           onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="state">State: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="state" id="state" placeholder="State" value={this.state.state}
                                           onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="postalCode">Postal Code: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="postalCode" id="postalCode" placeholder="Postal Code"
                                           value={this.state.postalCode} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button color="secondary" onClick={this.handleBackStep}>Back</Button>
                                    <Button color="primary" type="submit">Send</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Col>
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedOwner = connect(mapStateToProps)(Owner);
export { connectedOwner as Owner};
