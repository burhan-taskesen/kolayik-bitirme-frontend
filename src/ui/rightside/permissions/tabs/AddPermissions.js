import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

class AddPermissions extends Component {
    constructor(props) {
        super(props);

        let curr = new Date();
        curr.setDate(curr.getDate());
        let currentDate = curr.toISOString().substring(0,10);
        curr.setDate(curr.getDate() + 1)
        let currentDateTomorrow = curr.toISOString().substring(0,10);
        this.state = {
            permissionType: 'YILLIK',
            startDate: currentDate,
            endDate: currentDateTomorrow,
            explanation: ''
        }

        this.handleChange = (event) => {
            let {name, value} = event.target;

            this.setState({
                [name]: value
            })
        }
    }

    render() {
        return (
            <div className="p-2" style={{maxHeight: '90vh', overflowY: 'auto'}}>
                <div className="col-6">
                    <Form>
                        <FormGroup>
                            <Label for="useridBox">Çalışan Id</Label>
                            <Input type="text"
                                   name="userId"
                                   id="useridBox"
                                   disabled
                                   value={this.props.superObject.state.selectedUser.employeeId}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="explanationBox">Açıklama</Label>
                            <Input type="text"
                                   name="explanation"
                                   id="explanationBox"
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="startdateBox">Başlangıç Tarihi</Label>
                            <Input type="date"
                                   name="startDate"
                                   id="startdateBox"
                                   defaultValue={this.state.startDate}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="enddateBox">Bitiş Tarihi</Label>
                            <Input type="date"
                                   name="endDate"
                                   id="enddateBox"
                                   defaultValue={this.state.endDate}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="typeBox">İzin Türü</Label>
                            <Input type="select"
                                   name="permissionType"
                                   id="typeBox"
                                   defaultValue={this.state.permissionType}
                                   onChange={this.handleChange}>
                                <option>YILLIK</option>
                                <option>DOGUM</option>
                                <option>HASTALIK</option>
                            </Input>
                        </FormGroup>

                        <hr className="my-2"/>

                        <Button color="success" className="mb-4" onClick={(event) => {
                            let data = {
                                permissionType: this.state.permissionType,
                                startDate: this.state.startDate,
                                endDate: this.state.endDate,
                                explanation: this.state.explanation,
                                employeeId: this.props.superObject.state.selectedUser.employeeId
                            }

                            console.log(data)

                            axios.post("http://localhost:8080/api/v1/permissions", data)
                                .then(response => {
                                    if(response.status == 201){
                                        this.props.superObject.setState({
                                            activeTab: '1'
                                        })
                                        alert("İzin oluşturuldu")
                                    }
                                }).catch(reason => {
                                    alert(reason.data)
                                })
                        }}>Ekle</Button>
                        <br/>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddPermissions;