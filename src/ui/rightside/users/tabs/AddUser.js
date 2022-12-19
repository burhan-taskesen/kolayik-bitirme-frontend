import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";

class AddUser extends Component {
    constructor(props) {
        super(props);

        let curr = new Date();
        curr.setDate(curr.getDate());
        let currentDate = curr.toISOString().substring(0,10);

        this.state = {
            name: '',
            surname: '',
            email: '',
            tcno: 0,
            salary: '',
            title: '',
            grade: 'J1',
            role: 'DEVELOPER',
            department: 'BACKEND',
            startDate: currentDate,
            birthDate: currentDate,
            address: '',
            city: '',
            country: '',
            postcode: '',
            telno: ''
        }
    }


    render() {
        return (
                <div className="p-2" style={{maxHeight: '90vh', overflowY:'auto'}}>
                    <div className="col-6">
                        <Form>
                            <FormGroup>
                                <Label for="nameBox">Ad</Label>
                                <Input type="text"
                                       name="name"
                                       id="nameBox"
                                       placeholder="Ad"
                                       onChange={(event) => this.setState({name: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="surnameBox">Soyad</Label>
                                <Input type="text"
                                       name="surname"
                                       id="surnameBox"
                                       placeholder="Soyad"
                                       required={true}
                                       onChange={(event) => this.setState({surname: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="emailBox">Email</Label>
                                <Input type="email"
                                       name="email"
                                       id="emailBox"
                                       required
                                       placeholder="E-mail"
                                       onChange={(event) => this.setState({email: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="tcnoBox">TC No</Label>
                                <Input type="number"
                                       name="tcno"
                                       id="tcnoBox"
                                       placeholder="123456789101"
                                       required
                                       onChange={(event) => this.setState({tcno: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="salaryBox">Maaş</Label>
                                <Input type="number"
                                       name="salary"
                                       id="salaryBox"
                                       required
                                       onChange={(event) => this.setState({salary: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="titleBox">Title</Label>
                                <Input type="text"
                                       name="title"
                                       id="titleBox"
                                       placeholder=""
                                       required
                                       onChange={(event) => this.setState({title: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="gradeBox">Seviye</Label>
                                <Input type="select"
                                       name="grade"
                                       id="gradeBox"
                                       placeholder=""
                                       defaultValue="J1"
                                       required
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
                                <Input type="select"
                                       name="role"
                                       id="roleBox"
                                       placeholder=""
                                       defaultValue="DEVELOPER"
                                       required
                                       onChange={(event) => this.setState({role: event.target.value})}>
                                    <option>DEVELOPER</option>
                                    <option>LANGIRTCI</option>
                                    <option>PESCI</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="departmanBox">Departman</Label>
                                <Input type="select"
                                       name="departman"
                                       id="departmanBox"
                                       required
                                       onChange={(event) => this.setState({department: event.target.value})}>
                                    <option>BACKEND</option>
                                    <option>FRONTEND</option>
                                    <option>ANDROID</option>
                                    <option>IOS</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="startdateBox">İşe Başlama</Label>
                                <Input type="date"
                                       name="startDate"
                                       id="startdateBox"
                                       defaultValue={this.state.startDate}
                                       required
                                       onChange={(event) => this.setState({startDate: event.target.value})}>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="birthdateBox">Doğum Günü</Label>
                                <Input type="date"
                                       name="birthDate"
                                       id="birthdateBox"
                                       defaultValue={this.state.birthDate}
                                       required
                                       onChange={(event) => this.setState({birthDate: event.target.value})}>
                                </Input>
                            </FormGroup>

                            <br/>
                            <hr className="my-2"/>
                            <br/>

                            <FormGroup>
                                <Label for="addressBox">Adres</Label>
                                <Input type="text"
                                       name="address"
                                       id="addressBox"
                                       placeholder="Adres"
                                       required
                                       onChange={(event) => this.setState({address: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cityBox">Şehir</Label>
                                <Input type="text"
                                       name="city"
                                       id="cityBox"
                                       placeholder="Şehir"
                                       required
                                       onChange={(event) => this.setState({city: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="countryBox">Ülke</Label>
                                <Input type="text"
                                       name="country"
                                       id="countryBox"
                                       required
                                       placeholder="Ülke"
                                       onChange={(event) => this.setState({country: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="postcodeBox">Posta Kodu</Label>
                                <Input type="text"
                                       name="postcode"
                                       id="postcodeBox"
                                       placeholder="Posta Kodu"
                                       required
                                       onChange={(event) => this.setState({postcode: event.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="telnoBox">Telefon</Label>
                                <Input type="number"
                                       name="telno"
                                       id="telnoBox"
                                       placeholder="Tel No"
                                       required
                                       onChange={(event) => this.setState({telno: event.target.value})}/>
                            </FormGroup>
                            <br/>
                            <Button color="success" type="submit" className="mb-4" onClick={(event) => {
                                let startDateElements = this.state.startDate.split('.');
                                let birthDateElements = this.state.birthDate.split('.');

                                let data = {
                                    name: this.state.name,
                                    surname: this.state.surname,
                                    email: this.state.email,
                                    tcNo: this.state.tcno,
                                    salary: parseInt(this.state.salary),
                                    title: this.state.title,
                                    grade: this.state.grade,
                                    role: this.state.role,
                                    department: this.state.department,
                                    startDate: String(startDateElements[0]),
                                    birthDate: String(birthDateElements[0]),
                                    createAddressRequest: {
                                        address: this.state.adres,
                                        city:this.state.city,
                                        country:this.state.country,
                                        postCode:this.state.postcode,
                                        telNo:this.state.telno,
                                    }
                                }

                                console.log(data)

                                axios.post("http://localhost:8080/api/v1/employees",data)
                                    .then(response => {
                                        alert(response.data)
                                    }).catch(reason => {
                                        alert(reason)
                                    })
                            }}>Kaydet</Button>
                            <br/>
                        </Form>
                    </div>
                </div>
        );
    }
}

export default AddUser;