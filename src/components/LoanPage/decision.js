/**
 * Created by fabymarpe on 7/24/18.
 */
import React from 'react';
import { Jumbotron, Button, Form, Container, Row, Col, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';


class Decision extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.handleGoToStep(1);
    }

    render(){
        const { user, loan } = this.props;
        return <Col md="12">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Jumbotron>
                            <h1 className="display-3">Hi {user.name}!</h1>
                            <p className="lead">
                                Your loan request by
                                <strong> { loan.business.requestedAmount  }</strong> has been
                                <strong> { loan.status }</strong>
                            </p>
                            <hr className="my-2"/>
                            </Jumbotron>
                            <Container>
                                <Row>
                                    <Col>
                                        <Button color="primary" type="submit">Accept</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </Form>
                </Col>
    }
}

export default Decision;