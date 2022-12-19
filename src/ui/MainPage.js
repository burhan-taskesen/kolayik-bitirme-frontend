import React, {Component} from 'react';
import MyMenu from "./leftside/MyMenu"
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import {Card} from "reactstrap";


class MainPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="row main-page bg-primary" style={{minWidth: "1200px"}}>
                <div className="col-2">
                    <Card className="p-2 m-2 leftside">
                        <MyMenu className="leftside text-dark"/>
                    </Card>
                </div>
                <div className="col-10 rightside">
                    <Card className="rightside p-lg-2">
                        <Outlet/>
                    </Card>
                </div>
            </div>
        );
    }
}

export default MainPage;