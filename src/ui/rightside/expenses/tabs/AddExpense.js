import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

class AddExpense extends Component {
    constructor(props) {
        super(props);

        // Default olarak tarihi bugune ayarlama
        let curr = new Date();
        curr.setDate(curr.getDate());
        let currentDate = curr.toISOString().substring(0,10);

        this.state = {
            expenseType: 'YEMEK',
            date: currentDate,
            taxRate: 18.0,
            amount: 0,
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
                            <Input type="text" name="userId" id="useridBox" placeholder="" disabled
                                   value={this.props.superObject.state.selectedUser.employeeId}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="explanationBox">Açıklama</Label>
                            <Input type="text" name="explanation" id="explanationBox" placeholder=""
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="amountBox">Harcama Miktarı</Label>
                            <Input type="number"
                                   name="amount"
                                   id="amountBox"
                                   placeholder="0.0"
                                   onChange={(e) => {
                                       this.setState({
                                           amount: parseFloat(e.target.value)
                                       })
                                   }
                                   }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="taxrateBox">Vergi Oranı</Label>
                            <Input type="number"
                                   name="taxRate"
                                   id="taxrateBox"
                                   placeholder="18.0"
                                   defaultValue={18.0}
                                   onChange={(e) => {
                                       this.setState({
                                           taxRate: parseFloat(e.target.value)
                                       })
                                   }
                                   }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="typeBox">Harcama Tipi</Label>
                            <Input type="select" name="expenseType" id="typeBox" placeholder="" defaultValue="YEMEK"
                                   onChange={this.handleChange}>
                                <option>YEMEK</option>
                                <option>YOL</option>
                                <option>IVIR</option>
                                <option>ZIVIR</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="dateBox">Tarih</Label>
                            <Input type="date"
                                   name="date" id="dateBox"
                                   onChange={(event) => this.setState({date: event.target.value})}
                                   defaultValue={this.state.date}
                            >
                            </Input>
                        </FormGroup>

                        <hr className="my-2"/>

                        <Button color="success" className="mb-4" onClick={(event) => {
                            let data = {
                                expenseType: this.state.expenseType,
                                date: this.state.date,
                                taxRate: this.state.taxRate,
                                amount: this.state.amount,
                                explanation: this.state.explanation,
                                employeeId: this.props.superObject.state.selectedUser.employeeId
                            }

                            console.log(data)

                            axios.post("http://localhost:8080/api/v1/expenses", data)
                                .then(response => {
                                    if(response.status == 201){
                                        this.props.superObject.setState({
                                            activeTab: '1'
                                        })
                                        alert("Harcama oluşturuldu")
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

AddExpense.propTypes = {};

export default AddExpense;