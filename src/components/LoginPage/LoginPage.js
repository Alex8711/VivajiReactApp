import React,{useState,useEffect} from "react";
import {Col, Form, Input, Layout, Row, Radio, Button, Image, Card} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import styles from './LoginPage.module.css';
import {BorderOutlined, LockOutlined, MailOutlined, NumberOutlined, UserOutlined} from "@ant-design/icons";
import logo from './vivaji_logo.png';
import {login} from '../../actions/userActions';


const {Header, Content, Footer} = Layout;

const LoginPage = () => {
    const [conditionForm, setConditionForm] = useState("subscribe");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    const history = useHistory();
    const onChange =e=>{
        setConditionForm(e.target.value)
    }
    const submitHandler = () => {
        /*e.preventDefault();*/
        dispatch(login(email, password));
        console.log("submit")
    };
    let formForRender;
    if(conditionForm=="subscribe")
    {
        formForRender=  <Form onFinish={submitHandler}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input className={styles.inputRight} prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Subscriber ID"/>
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
                    className={styles.inputRight}
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

                  <Input className={styles.inputRight} prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email"/>
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
                      className={styles.inputRight}
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
               <Input className={styles.inputRight} prefix={<NumberOutlined className="site-form-item-icon"/>} placeholder="Voucher Code"/>
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
                <Input className={styles.inputRight} prefix={<BorderOutlined className="site-form-item-icon"/>} placeholder="Activation Code"/>
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
                <Input className={styles.inputRight} prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Activation Code"/>
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

                    <Row type="flex" justify="center" align="middle" className={styles.centerRow} >
                        <Col span={12} >
                          <Card bordered={false} className={styles.leftForm}>
                           <Radio.Group  buttonStyle="solid" defaultValue="subscribe" onChange={onChange} value={conditionForm} className={styles.buttonGroup}>
                               <img width={"50%"} src={logo}/>
                               <Radio.Button className={styles.radioStyle} value="subscribe">Subscriber ID</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="email">Email</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="voucher">Voucher Code</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="activation">Activation Code</Radio.Button>
                               <Radio.Button className={styles.radioStyle} value="trial">Start Trial</Radio.Button>
                           </Radio.Group>
                          </Card>
                        </Col>
                       <Col span={12} >
                           <Card bordered={false} className={styles.rightForm}>
                           {formForRender}
                           </Card>
                       </Col>
                    </Row>



            </Layout>

        </>
    )
}

export default LoginPage;