import React from "react";

import 'antd/dist/antd.css';
import styles from './HomePage.module.css';
import {LockOutlined} from "@ant-design/icons";
import { blue } from '@ant-design/colors';

// import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import axios from 'axios';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;
export default class PersonList extends React.Component{

    state = {
        persons: [],
    };
    
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {console.log(res); this.setState({persons: res.data});
    });
    }
    render(){
        return (
            <ul /* className={`${styles.content-font-colore} layout`} */>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>) }
            </ul>
        )
    }
}
