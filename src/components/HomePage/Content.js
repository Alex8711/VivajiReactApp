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
        // persons: [],
        loading: true,
        movie: null
    };
    
    async componentDidMount(){
        const url = "https://my.vivaji.com/api/v2/123456123450/vod/videos";
        const respons = await fetch(url);
        const data1 = await respons.json(); 
        //const i 
        this.setState({ movie: data1.data[0].item.cover.portrait, loading: false}) 

        console.log(data1.data);
        // axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {console.log(res); this.setState({persons: res.data});});
    }
    render(){
        return (
            <ul /* className={`${styles.content-font-colore} layout`} */>
                
                {/* {this.state.loading || !this.state.movie ? (<div>loading...</div>) : (<div><img width={"50%"} src={this.state.movie.feed_url}></img></div>)} */}
                {this.state.loading || !this.state.movie ? (<div>loading...</div>) : (<div><img width={"50%"} src={this.state.movie}></img></div>)}
            </ul> 
        )
    }
}
