import React from "react";
import { Row } from "antd";
import UserLayout from "./userlayout";
import { Card } from "antd";

export default function Overview() {
  return (
    <div>
      <UserLayout>
        <Row style={{ flexDirection: "column", alignItems: "center" }}>
          <h2>Overview</h2>
          <Row style={{ width: "608px", justifyContent: "space-between" }}>
            {" "}
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e", height: "84px" }}>
                <h3>Total Transaction</h3>
                <p>15</p>
              </Card>
            </div>
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e", height: "84px" }}>
                <h3>Total Transaction</h3>
                <p>15</p>
              </Card>
            </div>
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e", height: "84px" }}>
                <h3>Total Transaction</h3>
                <p>15</p>
              </Card>
            </div>
          </Row>
          <Row style={{ marginTop: "75px" }}>
            <div className="site-card-border-less-wrapper">
              <Card style={{ borderLeft: "3px solid #74cf4e", height: "84px" }}>
                <h3>All deliveries</h3>
                <p>15</p>
              </Card>
            </div>
          </Row>
        </Row>
      </UserLayout>
    </div>
  );
}
