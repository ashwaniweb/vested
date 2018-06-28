import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/app.scss";
import Main from "./main";
import Menu from "./common/menu";
import Footer from "./common/footer";

class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 500); // simulates loading of data
    }
    render() {
        const { loading } = this.state;
        if (loading) {
            // if your component doesn't have to wait for async data, remove this block
            return null; // render null when app is not ready
        }
        return (
            <Router>
                <div className="App">
                    <Menu />
                    <Main />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
