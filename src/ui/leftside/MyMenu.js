import React, {Component} from 'react';
import {Nav, NavLink, NavItem} from 'reactstrap'
import Link from "react-router-dom"
import ReactLogo from '../../recources/react.png'

class MyMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseOverTab: 'none',
            activeTab: 'none'
        }
    }

    render() {
        return (
            <div>
                <Nav pills vertical className="row justify-content-center">
                    <NavItem className="ps-3 pe-3">
                        <img src={ReactLogo} className="btn p-0" style={{maxWidth: '100%'}}/>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={this.state.mouseOverTab == '1' || this.state.activeTab == '1'}
                            className="MyNavLink text-dark my-custom-button text-sm-start"
                            href="/users"
                            onMouseOver={() => this.setState({mouseOverTab: '1'})}
                            onMouseLeave={() => this.setState({mouseOverTab: 'none'})}
                            onClick={() => {
                                this.setState({activeTab: '1'})
                            }}>
                            Kullanıcılar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={this.state.mouseOverTab == '2' || this.state.activeTab == '2'}
                            className="MyNavLink text-dark  my-custom-button"
                            href="/expenses"
                            onMouseOver={() => this.setState({mouseOverTab: '2'})}
                            onMouseLeave={() => this.setState({mouseOverTab: 'none'})}
                            onClick={() => {
                                this.setState({activeTab: '2'})
                            }}>
                            Harcamalar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={this.state.mouseOverTab == '3' || this.state.activeTab == '3'}
                            className="MyNavLink text-dark my-custom-button"
                            href="/permissions"
                            onMouseOver={() => this.setState({mouseOverTab: '3'})}
                            onMouseLeave={() => this.setState({mouseOverTab: 'none'})}
                            onClick={() => {
                                this.setState({activeTab: '3'})
                            }}>
                            İzinler
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default MyMenu;