/**
 * Created by fabymarpe on 7/24/18.
 */
import React from 'react';
import { Jumbotron, Button, Form, Container, Row, Col, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';


class Decision extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch({type: 'cleanAll'});
        this.props.handleSelect(1);
    }

    static getDerivedStateFromProps(props, state) {
        return props.loan;
    }

    render(){
        return <div>
            <Container>
                <Col md="12">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
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
    console.log(state);
    const { loan } = state;
    return {
        loan
    }
}

const connectedOwner = connect(mapStateToProps)(Decision);
export { connectedOwner as Decision }