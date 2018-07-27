/**
 * Created by fabymarpe on 7/27/18.
 */
/**
 * Created by fabymarpe on 7/26/18.
 */
import React from 'react';
import { Nav, NavItem, NavLink, Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from 'react-fontawesome';
import { Business } from './business';
import { Owner } from './owner';
import { Decision } from './decision';



class Loan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabSelected: 1, business: {}};
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(tabSelected) {
        this.setState({tabSelected: tabSelected});
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12">
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
                        <Business handleSelect={this.handleSelect}/>
                    </Col>
                    }
                    { this.state.tabSelected === 2 &&
                    <Col>
                        <Owner handleSelect={this.handleSelect}/>
                    </Col>
                    }
                    { this.state.tabSelected === 3 &&
                    <Col>
                        <Decision handleSelect={this.handleSelect}/>
                    </Col>
                    }
                </Row>
            </Container>
        )
    }
}

export default Loan;
