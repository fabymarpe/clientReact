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
        const { dispatch } = this.props;
        dispatch({type: 'cleanAll'});
        this.props.handleSelect(1);
    }

    render(){
        const { loan, login } = this.props;
        console.log(login);
        return <div>
            <Container>
                <Col md="12">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Jumbotron>
                            <h1 className="display-3">Hi {login.name}</h1>
                            <p className="lead">Your loan request has been {loan.status}</p>
                            <hr className="my-2"/>
                        </Jumbotron>
                            <Container>
                                <Row>
                                    <Col>
                                        <Button color="primary" type="submit">Clean</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </Form>
                </Col>
            </Container>
        </div>
    }
}

function mapStateToProps(state){
    const { loan, login } = state;
    return {
        loan,
        login,
    }
}

const connectedOwner = connect(mapStateToProps)(Decision);
export { connectedOwner as Decision }