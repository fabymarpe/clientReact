/**
 * Created by fabymarpe on 7/24/18.
 */
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container} from 'reactstrap';
import { connect } from 'react-redux';


class Business extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event){
        event.preventDefault();
        const { dispatch } = this.props;
        let business = this.state;
        dispatch({type: 'saveBusinessData', business});
        this.props.handleSelect(2);
    }

    static getDerivedStateFromProps(props, state) {
        return props.loan.business;
    }


    render(){
        return <div>
            <Container>
                <Col md="12">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="taxID">Tax ID: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="taxID" id="taxID" placeholder="Tax ID"
                                           value={this.state.taxID} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="businessName">Business Name: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="businessName" id="businessName" placeholder="Business Name"
                                           value={this.state.businessName} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="businessAddress">Business Address: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="businessAddress" id="businessAddress" placeholder="Business Address"
                                           value={this.state.businessAddress} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="city">City: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="city" id="city" placeholder="City"
                                           value={this.state.city} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="2">
                                    <Label for="state">State: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="text" name="state" id="state" placeholder="State"
                                           value={this.state.state} onChange={this.handleChange}/>
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
                                <Col md="2">
                                    <Label for="requestedAmount">Requested Amount: </Label>
                                </Col>
                                <Col md="10">
                                    <Input type="number" name="requestedAmount" id="requestedAmount" placeholder="Requested Amount"
                                           value={this.state.requestedAmount} onChange={this.handleChange}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md="12">
                                    <Button color="primary" type="submit">Continue</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Col>
            </Container>
        </div>
    }
}

function mapStateToProps(state) {
    const { loan } = state;
    return {
        loan
    }
}

const connectedBusiness = connect(mapStateToProps)(Business);
export { connectedBusiness as Business };