import React, {Component} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import AllExpenses from "../expenses/tabs/AllExpenses";
import AddExpense from "../expenses/tabs/AddExpense";
import UpdateExpense from "../expenses/tabs/UpdateExpense";
import AllPermissions from "./tabs/AllPermissions";
import AddPermissions from "./tabs/AddPermissions";
import UpdatePermission from "./tabs/UpdatePermission";

class Permissions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            selectedUser: {},
            selectedPermission: {}
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
                        <NavLink active={this.state.activeTab == '2'}>
                            İzin Ekle
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={this.state.activeTab == '3'}>
                            İzin Güncelle
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId={'1'}>
                        <AllPermissions superObject={this}/>
                    </TabPane>
                    <TabPane tabId={'2'}>
                        <AddPermissions superObject={this}/>
                    </TabPane>
                    <TabPane tabId={'3'}>
                        <UpdatePermission superObject={this}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Permissions;