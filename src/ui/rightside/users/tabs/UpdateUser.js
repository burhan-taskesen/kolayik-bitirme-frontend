import React from 'react';
import {
    FormGroup,
    Label, Input, Button, Form
} from 'reactstrap';
import axios from "axios";

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeId: undefined,
            email: undefined,
            salary: undefined,
            title: undefined,
            grade: undefined,
            role: undefined,
            department: undefined,
        }

        // console.log(this.props.superObject.state.selectedUser)
    }

    render() {
        return (
            <div className="p-2">
                <Form>
                    <FormGroup>
                        <Label for="useridBox">Id</Label>
                        <Input value={this.props.superObject.state.selectedUser.employeeId} disabled type="text"
                               name="userId" id="useridBox"
                               onChange={(event) => this.setState({employeeId: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="emailBox">Email</Label>
                        <Input defaultValue={this.props.superObject.state.selectedUser.email} type="email" name="email"
                               id="emailBox" onChange={(event) => this.setState({email: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="salaryBox">Maaş</Label>
                        <Input defaultValue={this.props.superObject.state.selectedUser.salary} type="number"
                               name="salary" id="salaryBox"
                               onChange={(event) => this.setState({salary: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="titleBox">Title</Label>
                        <Input defaultValue={this.props.superObject.state.selectedUser.title} type="text" name="title"
                               id="titleBox" onChange={(event) => this.setState({title: event.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="gradeBox">Seviye</Label>
                        <Input type="select" name="grade" id="gradeBox" placeholder=""
                               defaultValue={this.props.superObject.state.selectedUser.grade}
                               onChange={(event) => this.setState({grade: event.target.value})}>
                            <option>J1</option>
                            <option>J2</option>
                            <option>M1</option>
                            <option>M2</option>
                            <option>S1</option>
                            <option>S2</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="roleBox">Rol</Label>
                        <Input defaultValue={this.props.superObject.state.selectedUser.role} type="select" name="role"
                               id="roleBox" onChange={(event) => {this.setState({role: event.target.value})}}>
                            <option>DEVELOPER</option>
                            <option>LANGIRTCI</option>
                            <option>PESCI</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="departmENTBox">Departman</Label>
                        <Input type="select"
                               name="departman"
                               id="departmentBox"
                               defaultValue={this.props.superObject.state.selectedUser.department}
                               onChange={(event) => this.setState({department: event.target.value})}>
                            <option>BACKEND</option>
                            <option>FRONTEND</option>
                            <option>ANDROID</option>
                            <option>IOS</option>
                        </Input>
                    </FormGroup>

                    <hr/>
                    <Button color="success" className="mb-4" onClick={() => {
                        let data = {
                            email: this.state.email ?? this.props.superObject.state.selectedUser.email,
                            salary: this.state.salary ?? this.props.superObject.state.selectedUser.salary,
                            title: this.state.title ?? this.props.superObject.state.selectedUser.title,
                            grade: this.state.grade ?? this.props.superObject.state.selectedUser.grade,
                            role: this.state.role ?? this.props.superObject.state.selectedUser.role,
                            department: this.state.department ?? this.props.superObject.state.selectedUser.department
                        }

                        console.log("Update employee request data")
                        console.log(data)

                        axios.put("http://localhost:8080/api/v1/employees/".concat(this.props.superObject.state.selectedUser.employeeId), data).then(response => {
                            alert(response.status)
                            this.props.superObject.setState({
                                activeTab: '1'
                            })
                            this.props.superObject.state.allUsersObject.getAllUsers()
                        }).catch(reason => {
                            alert(reason)
                        })
                    }}>Güncelle</Button>
                    <br/>
                </Form>
            </div>
        );
    }
}