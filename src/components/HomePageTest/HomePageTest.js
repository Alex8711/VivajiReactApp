import React,{useEffect,useState} from "react";
import {Form, Input, Row} from "antd";
import 'antd/dist/antd.css';
import {LockOutlined} from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import axios from 'axios';
import './HomePageTest.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const HomePageTest =()=>{
    const [allVideos,setAllVideos] = useState([]);
    const [allMovies,setAllMovies] = useState([]);
    const [allTVShows,setAllTVShows] = useState([]);
    const [allMusicVideos,setAllMusicVideos] = useState([]);
    const [contentCategoryId,setContentCategoryId] = useState();
    useEffect(() => {
        const fetchAllVideos = async ()=>{
            const {data:{data}} = await axios.get("https://my.vivaji.com/api/v2/123456123450/vod/videos");
             setAllVideos(data);
             setAllMovies(data.filter(m => m.item.category.id==="1"));
            setAllTVShows(data.filter(m => m.item.category.id==="2"));
            setAllMusicVideos(data.filter(m => m.item.category.id==="3"));
        }
        fetchAllVideos();
        console.log(allVideos);
        console.log(allMovies);
        console.log(allTVShows);
        console.log(allMusicVideos);
    },[])
const conditionalContent = ()=>{
    if(contentCategoryId===1)
    {
        return (<ul>
            {allMovies.map(item => (
                <li key={item.item.id}>

                    <a href={item.item.cover.portrait}>{item.item.name}</a>
                    <div><img width={"50%"} src={item.item.cover.portrait}></img></div>
                </li>
            ))}
        </ul>)

    } else if(contentCategoryId===2)
    {
        return (<ul>
            {allTVShows.map(item => (
                <li key={item.item.id}>

                    <a href={item.item.cover.portrait}>{item.item.name}</a>
                    <div><img width={"50%"} src={item.item.cover.portrait}></img></div>
                </li>
            ))}
        </ul>)
    }else if(contentCategoryId===3)
    {
        return (<ul>
            {allMusicVideos.map(item => (
                <li key={item.item.id}>

                    <a href={item.item.cover.portrait}>{item.item.name}</a>
                    <div><img width={"50%"} src={item.item.cover.portrait}></img></div>
                </li>
            ))}
        </ul>)
    }else {
        return(<></>)
    }
}



    return(

        <>
            {
                allVideos.length<1?(<h2>Loading</h2>):( <Layout className={`layout`}>
                    <Header className="header">
                        <div className="logo" />
                        {/*<Menu theme="dark" mode="horizontal" >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>*/}
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                               /* defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}*/
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Categories">
                                    <Menu.Item key="1" onClick={()=>{setContentCategoryId(1)}}>Movies</Menu.Item>
                                    <Menu.Item key="2" onClick={()=>{setContentCategoryId(2)}}>TV Shows</Menu.Item>
                                    <Menu.Item key="3" onClick={()=>{setContentCategoryId(3)}}>Music Videos</Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '24px' }}>

                            <Content  className="site-layout-background"
                                      style={{
                                          padding: 0,
                                          margin: 0,
                                          minHeight: 280,
                                      }}
                            >
                                {conditionalContent()}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>)
            }

        </>

    )
}

export default HomePageTest;