import React from "react";
import { Avatar, Row, Menu } from "antd";
import styles from "../styles/UserPanel.module.css";
import Userinfo from "../components/UserInfo";

export default function UserPanel() {
  return (
    <>
      <Row className={styles.panel}>
        <Avatar
          style={{ border: "1px solid #44cd48" }}
          size={80}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {" "}
        <h1 style={{ margin: "0" }}>Ram</h1>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {" "}
        <h4>Ram</h4>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Menu
          mode="horizontal"
          style={{ boxShadow: "1px 4px 6px #888888", borderRadius: " 30px" }}
        >
          <Menu.Item> Overview</Menu.Item>
          <Menu.Item>Account info</Menu.Item>
          <Menu.Item>Subscription</Menu.Item>
          <Menu.Item>Payment</Menu.Item>
        </Menu>
      </Row>

      <Row>
        <h3 style={{ marginLeft: "567px", marginTop: "35px" }}>
          Account Information
        </h3>
        {/* <Userinfo /> */}
      </Row>
    </>
  );
}
