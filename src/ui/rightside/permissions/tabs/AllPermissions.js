import React, {Component} from 'react';
import axios from "axios";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {useNavigate} from "react-router-dom";

class AllPermissions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            users: [],
            selectedUserForPermissions: {},
            permissionsOfSelectedUser: []
        }

        this.getAllUsers = () => {
            axios.get("http://localhost:8080/api/v1/employees")
                .then(value => {
                    this.setState({users: value.data});
                    console.log(value.data);
                }).catch(reason => {
                    alert(reason.data)
                })
        }

        this.getAllPermissions = (employeeId) => {
            axios.get("http://localhost:8080/api/v1/permissions?employeeId=".concat(employeeId))
                .then(response => {
                    this.setState({
                        permissionsOfSelectedUser: response.data
                    }).catch(reason => {
                        alert(reason.data)
                    })

                    console.log(response.data)
                }).catch(reason => {console.log(reason)})
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
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} style={{marginTop: '25vh', minWidth: '70vw', maxHeight: '40vh'}}>
                    <ModalHeader toggle={this.toggle}>İzinler</ModalHeader>
                    <ModalBody style={{overflowY: 'auto', maxHeight: '30vh'}}>
                        <Table style={{tableLayout: 'fixed'}}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <td><strong>Başlangıç</strong></td>
                                <td><strong>Bitiş</strong></td>
                                <td style={{width: '200px'}}><strong>Açıklama</strong></td>
                                <td><strong>İzin Türü</strong></td>
                                <td/>
                                <td/>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.permissionsOfSelectedUser.map((value, index) => (
                                <tr>
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td>
                                        {value.startDate}
                                    </td>
                                    <td>
                                        {value.endDate}
                                    </td>
                                    <td style={{wordWrap: 'break-word'}}>
                                        {value.explanation}
                                    </td>
                                    <td>
                                        {value.permissionType}
                                    </td>
                                    <td>
                                        <Button color="info" className="text-center me-lg-2"
                                                onClick={() => {
                                                    this.props.superObject.setState({
                                                        activeTab: '3',
                                                        selectedPermission: value
                                                    })

                                                    this.toggle()
                                                }}>
                                            Güncelle
                                        </Button>

                                        <Button color="success" className="text-center" onClick={(event) => {
                                            console.log("permission delete request")

                                            console.log(value)

                                            axios.delete("http://localhost:8080/api/v1/permissions?permissionId=".concat(value.permissionId))
                                                .then(response => {
                                                    if(response.status == 204){
                                                        console.log("permission silme başarılı")

                                                        alert("İzin silindi")

                                                        this.setState({
                                                            permissionsOfSelectedUser: this.state.permissionsOfSelectedUser.filter(item => item !== value)
                                                        })
                                                    }
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
                                                    selectedUserForPermissions: value
                                                })

                                                this.getAllPermissions(value.employeeId)

                                                this.toggle()

                                                console.log(value)
                                            }}>
                                        İzinler
                                    </Button>

                                    <Button color="success" className="text-center" onClick={(event) => {
                                        this.props.superObject.setState({
                                            activeTab: '2',
                                            selectedUser: value
                                        })

                                        console.log("all permissions selected value")
                                        console.log(value)
                                    }}>
                                        İzin Ekle
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

export default AllPermissions;