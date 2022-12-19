import React from "react";
import {Nav, NavItem, NavLink, TabContent, TabPane, Col, Row, Card, CardText, Button, CardTitle} from "reactstrap";
import AllUsers from "./tabs/AllUsers";
import AddUser from "./tabs/AddUser";
import UpdateUser from "./tabs/UpdateUser"

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            selectedUser: {}
        }

        this.changeTab = (tab) => {
            this.setState({
                activeTab: tab
            })
        }

    }


    render() {
        return (
            <div className="col-11 rightside ms-2">
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => this.changeTab('1')} active={this.state.activeTab == '1'}>
                            Tüm Kullanıcılar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => this.changeTab('2')} active={this.state.activeTab == '2'}>
                            Kullanıcı Ekle
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={this.state.activeTab == '3'}>
                            {/*onClick={() => this.changeTab('3')}*/}
                            Kullanıcı Güncelle
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId={'1'}>
                        <AllUsers superObject={this}/>
                    </TabPane>
                    <TabPane tabId={'2'}>
                        <AddUser/>
                    </TabPane>
                    <TabPane tabId={'3'}>
                        <UpdateUser superObject={this}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Users;