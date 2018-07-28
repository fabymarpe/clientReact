/**
 * Created by fabymarpe on 7/24/18.
 */
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container} from 'reactstrap';
import { connect } from 'react-redux';

import { apiComunication } from '../../services/api';

class Owner extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
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
        let data = {owner: this.state, business: this.props.loan.business};
        apiComunication.post('loan', data).then((result) => {
            let responseJson = result;
            if (200 === responseJson.code) {
                console.log(responseJson.msg);
                data.status = responseJson.msg;
                dispatch({type: 'requestLoad', data});
                this.props.handleSelect(3);
            } else{
                console.log(responseJson.msg);
            }
        }, error => {
            //dispatch(failure(error));
            //dispatch(alertActions.error(error));
        });
    }

    handleBackStep(){
        const { dispatch } = this.props;
        let owner = this.state;
        dispatch({type: 'saveOwnerData', owner});
        this.props.handleSelect(1);
    }

    static getDerivedStateFromProps(props, state) {
        return props.loan.owner;
}

    render() {
        return <div>
            <Container>
                <Col md="12">
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
            </Container>
        </div>
    }
}

function mapStateToProps(state){
    const { loan } = state;
    return {
        loan
    }
}

const connectedOwner = connect(mapStateToProps)(Owner);
export { connectedOwner as Owner }