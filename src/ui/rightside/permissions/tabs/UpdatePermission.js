import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

class UpdatePermission extends Component {
    constructor(props) {
        super(props);

        this.state = {

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
                            <Label for="permissionidBox">İzin Id</Label>
                            <Input type="text"
                                   name="permissionId"
                                   id="permissionidBox"
                                   disabled
                                   value={this.props.superObject.state.selectedPermission.permissionId}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="explanationBox">Açıklama</Label>
                            <Input type="text"
                                   name="explanation"
                                   id="explanationBox"
                                   defaultValue={this.props.superObject.state.selectedPermission.explanation}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="startdateBox">Başlangıç Tarihi</Label>
                            <Input type="date"
                                   name="startDate"
                                   id="startdateBox"
                                   defaultValue={this.props.superObject.state.selectedPermission.startDate}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="enddateBox">Bitiş Tarihi</Label>
                            <Input type="date"
                                   name="endDate"
                                   id="enddateBox"
                                   defaultValue={this.props.superObject.state.selectedPermission.endDate}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="typeBox">İzin Türü</Label>
                            <Input type="select"
                                   name="permissionType"
                                   id="typeBox"
                                   defaultValue={this.props.superObject.state.selectedPermission.permissionType}
                                   onChange={this.handleChange}>
                                <option>YILLIK</option>
                                <option>DOGUM</option>
                                <option>HASTALIK</option>
                            </Input>
                        </FormGroup>

                        <hr className="my-2"/>

                        <Button color="success" className="mb-4" onClick={(event) => {
                            console.log("Here's the UpdateExpense data: ")

                            let data = {
                                permissionId: this.props.superObject.state.selectedPermission.permissionId,
                                explanation: this.state.explanation ?? this.props.superObject.state.selectedPermission.explanation,
                                permissionType: this.state.permissionType ?? this.props.superObject.state.selectedPermission.permissionType,
                                startDate: this.state.startDate ?? this.props.superObject.state.selectedPermission.startDate,
                                endDate: this.state.endDate ?? this.props.superObject.state.selectedPermission.endDate
                            }

                            console.log(data)

                            axios.put("http://localhost:8080/api/v1/permissions", data)
                                .then(response => {
                                    if(response.status == 200){
                                        this.props.superObject.setState({
                                            selectedPermission: {},
                                            activeTab: '1'
                                        })
                                        alert("İzin güncellendi.")
                                    }
                                }).catch(reason => {
                                    alert(reason)
                                })
                        }}>Güncelle</Button>
                        <br/>
                    </Form>
                </div>
            </div>
        );
    }
}

export default UpdatePermission;