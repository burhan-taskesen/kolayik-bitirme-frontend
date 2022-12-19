import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

class UpdateExpense extends Component {
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
                            <Label for="expenseidBox">Harcama Id</Label>
                            <Input type="text" name="expenseId" id="expenseidBox"
                                   disabled
                                   value={this.props.superObject.state.selectedExpense.expenseId}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="explanationBox">Açıklama</Label>
                            <Input type="text"
                                   name="explanation"
                                   id="explanationBox"
                                   defaultValue={this.props.superObject.state.selectedExpense.explanation}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="taxrateBox">Vergi Oranı</Label>
                            <Input type="number"
                                   name="taxRate"
                                   id="taxrateBox"
                                   placeholder="18.0"
                                   defaultValue={this.props.superObject.state.selectedExpense.taxRate}
                                   onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="typeBox">Harcama Tipi</Label>
                            <Input type="select"
                                   name="expenseType"
                                   id="typeBox"
                                   defaultValue={this.props.superObject.state.selectedExpense.type}
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
                                   onChange={this.handleChange}
                                   defaultValue={this.props.superObject.state.selectedExpense.date}
                            >
                            </Input>
                        </FormGroup>

                        <hr className="my-2"/>

                        <Button color="success" className="mb-4" onClick={(event) => {
                            console.log("Here's the UpdateExpense data: ")

                            let data = {
                                explanation: this.state.explanation ?? this.props.superObject.state.selectedExpense.explanation,
                                taxRate: this.state.taxRate ?? this.props.superObject.state.selectedExpense.taxRate,
                                type: this.state.expenseType ?? this.props.superObject.state.selectedExpense.type,
                                date: this.state.date ?? this.props.superObject.state.selectedExpense.date
                            }

                            console.log(data)

                            axios.put("http://localhost:8080/api/v1/expenses/".concat(this.props.superObject.state.selectedExpense.expenseId), data)
                                .then(response => {
                                    if(response.status == 200){
                                        this.props.superObject.setState({
                                            activeTab: '1'
                                        })
                                        alert("Harcama güncellendi.")
                                    }
                                }).catch(reason => {
                                    alert(reason.data)
                                })
                        }}>Güncelle</Button>
                        <br/>
                    </Form>
                </div>
            </div>
        );
    }
}

UpdateExpense.propTypes = {};

export default UpdateExpense;