import React,{useState} from "react";
import {Col, Form, Input, Layout, Row, Radio, Button} from "antd";
import 'antd/dist/antd.css';
import styles from './LoginPage.module.css';
import {BorderOutlined, LockOutlined, MailOutlined, NumberOutlined, UserOutlined} from "@ant-design/icons";


const {Header, Content, Footer} = Layout;

const LoginPage = () => {
    const [conditionForm, setConditionForm] = useState("subscribe");
    const onChange =e=>{
        setConditionForm(e.target.value)
    }
    let formForRender;
    if(conditionForm=="subscribe")
    {
        formForRender=  <Form>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Subscriber ID"/>
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
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                    Log in
                </Button>

            </Form.Item>
            <Form.Item>
                Don't have an Account? <a href="#"> Sign Up </a>
            </Form.Item>
        </Form>
    } else if (conditionForm=="email")
    {
          formForRender=   <Form>
              <Form.Item
                  name="email"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your Email!',
                      },
                  ]}
              >

                  <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email"/>
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
                  <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon"/>}
                      type="password"
                      placeholder="Password"
                  />
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                      Log in
                  </Button>

              </Form.Item>
              <Form.Item>
                  <a href="#"> Forgot Password? </a>
              </Form.Item>
              <Form.Item>
                  Don't have an Account? <a href="#"> Sign Up </a>
              </Form.Item>
          </Form>
    } else if(conditionForm=="voucher")
    {
       formForRender=<Form>
           <Form.Item
               name="voucher code"
               rules={[
                   {
                       required: true,
                       message: 'Please input your Voucher Code!',
                   },
               ]}
           >
               <Input prefix={<NumberOutlined className="site-form-item-icon"/>} placeholder="Voucher Code"/>
           </Form.Item>

           <Form.Item>
               <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                   Log in
               </Button>

           </Form.Item>

       </Form>
    }else if(conditionForm=="activation")
    {
        formForRender=<Form>
            <Form.Item
                name="Activation Code"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Activation Code!',
                    },
                ]}
            >
                <Input prefix={<BorderOutlined className="site-form-item-icon"/>} placeholder="Activation Code"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                    Log in
                </Button>

            </Form.Item>

        </Form>
    }else {
        formForRender=<Form>
            <Form.Item
                name="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Activation Code"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                    Start Trial
                </Button>

            </Form.Item>

        </Form>
    }
    return (
        <>
            <Layout className={`${styles.bgImage} layout`}>
                <Content className={styles.centerArea}>
                    <Row type="flex" justify="center" align="middle" className={styles.centerRow} >
                        <Col>
                           <h2>VIVAJI</h2>
                           <Radio.Group  buttonStyle="solid" defaultValue="subscribe" onChange={onChange} value={conditionForm}>
                               <Radio.Button className={styles.radioStyle} value="subscribe">Subscriber ID</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="email">Email</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="voucher">Voucher Code</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="activation">Activation Code</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="trial">Start Trial</Radio.Button>
                           </Radio.Group>
                        </Col>
                       <Col>
                           {formForRender}
                       </Col>
                    </Row>

                </Content>

            </Layout>

        </>
    )
}

export default LoginPage;