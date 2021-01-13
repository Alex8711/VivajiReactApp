import React from "react";
import {Form, Input, Layout, Row} from "antd";
import 'antd/dist/antd.css';
import styles from './LoginPage.module.css';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

const LoginPage =()=>{
    return(
        <>
            <Layout className={`${styles.bgImage} layout`}>
                <Content className={styles.centerArea}>
                  <Row>
                      <Form>
                          <Form.Item
                              name="username"
                              rules={[
                                  {
                                      required: true,
                                      message: 'Please input your Username!',
                                  },
                              ]}
                          >
                              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                          </Form.Item>
                          <Form.Item
                              name="password"
                              rules={[
                                  {
                                      required: true,
                                      message: 'Please input your Password!',
                                  },
                              ]}
                          >
                              <Input
                                  prefix={<LockOutlined className="site-form-item-icon" />}
                                  type="password"
                                  placeholder="Password"
                              />
                          </Form.Item>
                      </Form>
                  </Row>

                </Content>

            </Layout>

        </>
    )
}

export default LoginPage;