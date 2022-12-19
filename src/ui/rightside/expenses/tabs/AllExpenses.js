import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import axios from "axios";

class AllExpenses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            users: [],
            selectedUserForExpenses: {},
            expensesOfSelectedUser: []
        }

        this.getAllUsers = () => {
            axios.get("http://localhost:8080/api/v1/employees")
                .then(value => {
                    this.setState({users: value.data});
                    console.log(value.data);
                })
        }

        this.getAllExpenses = (employeeId) => {
            axios.get("http://localhost:8080/api/v1/expenses/".concat(employeeId))
                .then(response => {
                    this.setState({
                        expensesOfSelectedUser: response.data
                    })

                    console.log(response.data)
                }).catch(reason => {
                console.log(reason)
            })
        }

        this.toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    componentDidMount() {
        this.getAllUsers()
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}
                       style={{marginTop: '25vh', minWidth: '50vw', maxHeight: '40vh'}}>
                    <ModalHeader toggle={this.toggle}>Harcamalar</ModalHeader>
                    <ModalBody style={{overflowY: 'auto', maxHeight: '30vh'}}>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <td><strong>Tip</strong></td>
                                <td><strong>Tarih</strong></td>
                                <td><strong>Vergi Oranı</strong></td>
                                <td><strong>Açıklama</strong></td>
                                <td><strong>Harcama Miktarı</strong></td>
                                <td/>
                                <td/>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.expensesOfSelectedUser.map((value, index) => (
                                <tr>
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td>
                                        {value.type}
                                    </td>
                                    <td>
                                        {value.date}
                                    </td>
                                    <td>
                                        {value.taxRate}
                                    </td>
                                    <td>
                                        {value.explanation}
                                    </td>
                                    <td>
                                        {value.amount}
                                    </td>
                                    <td>
                                        <Button color="info" className="text-center me-lg-2"
                                                onClick={() => {
                                                    this.props.superObject.setState({
                                                        activeTab: '3',
                                                        selectedExpense: value
                                                    })

                                                    this.toggle()
                                                }}>
                                            Güncelle
                                        </Button>

                                        <Button color="success" className="text-center" onClick={(event) => {
                                            console.log("expense delete request")

                                            console.log(value)

                                            axios.delete("http://localhost:8080/api/v1/expenses/".concat(value.expenseId))
                                                .then(response => {
                                                    if (response.status == 204) {
                                                        console.log("expense silme başarılı")

                                                        this.setState({
                                                            expensesOfSelectedUser: this.state.expensesOfSelectedUser.filter(item => item !== value)
                                                        })
                                                    }
                                                }).catch(reason => {
                                                    alert(reason.data)
                                                })
                                        }}>
                                            Sil
                                        </Button>
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            ))}
                            </tbody>

                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Tamam</Button>
                    </ModalFooter>
                </Modal>
                <div className="my-table">
                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <td><strong>Ad</strong></td>
                            <td><strong>Soyad</strong></td>
                            <td><strong>Email</strong></td>
                            <td><strong>Rol</strong></td>
                            <td><strong>Departman</strong></td>
                            <td/>
                            <td/>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map((value, index) => (
                            <tr>
                                <th scope="row">
                                    {index + 1}
                                </th>
                                <td>
                                    {value.name}
                                </td>
                                <td>
                                    {value.surname}
                                </td>
                                <td>
                                    {value.email}
                                </td>
                                <td>
                                    {value.role}
                                </td>
                                <td>
                                    {value.department}
                                </td>
                                <td>
                                    <Button color="info" className="text-center me-lg-2"
                                            onClick={() => {
                                                this.props.superObject.setState({
                                                    selectedUserForExpenses: value
                                                })

                                                this.getAllExpenses(value.employeeId)

                                                this.toggle()

                                                console.log(value)
                                            }}>
                                        Harcamalar
                                    </Button>

                                    <Button color="success" className="text-center" onClick={(event) => {
                                        this.props.superObject.setState({
                                            activeTab: '2',
                                            selectedUser: value
                                        })
                                        console.log("all expense selected value")
                                        console.log(value)
                                    }}>
                                        Harcama Ekle
                                    </Button>
                                </td>
                                <td>

                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </Table>
                </div>
            </div>
        );
    }
}

export default AllExpenses;