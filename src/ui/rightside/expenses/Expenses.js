import React, {Component} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import AllUsers from "../users/tabs/AllUsers";
import AddUser from "../users/tabs/AddUser";
import UpdateUser from "../users/tabs/UpdateUser";
import AllExpenses from "./tabs/AllExpenses";
import AddExpense from "./tabs/AddExpense";
import UpdateExpense from "./tabs/UpdateExpense";

class Expenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            selectedUser: {},
            selectedExpense: {}
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
                            Harcama Ekle
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={this.state.activeTab == '3'}>
                            Harcama Güncelle
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId={'1'}>
                        <AllExpenses superObject={this}/>
                    </TabPane>
                    <TabPane tabId={'2'}>
                        <AddExpense superObject={this}/>
                    </TabPane>
                    <TabPane tabId={'3'}>
                        <UpdateExpense superObject={this}/>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Expenses;