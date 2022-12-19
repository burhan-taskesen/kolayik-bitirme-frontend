import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

class AllUsers extends Component {
    constructor(props) {
        super(props);

        this.props.superObject.setState({
            allUsersObject: this
        })

        this.state = {
            users: []
        }

        this.getAllUsers = () => {
            axios.get("http://localhost:8080/api/v1/employees")
                .then(value => {
                    this.setState({users: value.data});
                    console.log(value.data);
                })
        }
    }

    componentDidMount() {
        this.getAllUsers()
    }

    render() {
        return (
            <div className="my-table">
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <td><strong>Ad</strong></td>
                        <td><strong>Soyad</strong></td>
                        <td><strong>Email</strong></td>
                        <td><strong>TC No</strong></td>
                        <td><strong>Maaş</strong></td>
                        <td><strong>Title</strong></td>
                        <td><strong>Seviye</strong></td>
                        <td><strong>Rol</strong></td>
                        <td><strong>Departman</strong></td>
                        <td><strong>İşe Başlama</strong></td>
                        <td><strong>Doğum Tarihi</strong></td>
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
                                {value.tcNo}
                            </td>
                            <td>
                                {value.salary}
                            </td>
                            <td>
                                {value.title}
                            </td>
                            <td>
                                {value.grade}
                            </td>
                            <td>
                                {value.role}
                            </td>
                            <td>
                                {value.department}
                            </td>
                            <td>
                                {value.startDate}
                            </td>
                            <td>
                                {value.birthDate}
                            </td>
                            <td>
                                <Button color="info" className="text-center"
                                        onClick={() => {
                                            this.props.superObject.setState({
                                                activeTab: '3',
                                                selectedUser: value
                                            })

                                            console.log(value)
                                        }}>
                                    Güncelle
                                </Button>
                            </td>
                            <td>
                                <Button color="danger" className="text-center" onClick={(event) => {
                                    axios.delete('http://localhost:8080/api/v1/employees/'.concat(value.employeeId)).then(response => {
                                        this.getAllUsers()
                                    }).catch(reason => {
                                        alert(reason)
                                    })
                                }}>
                                    Sil
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default AllUsers;