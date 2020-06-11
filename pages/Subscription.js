import React from "react";
import { Card, Row,Col } from "antd";
import UserLayout from "./userlayout";
import { Button, Radio } from "antd";
import { DownloadOutlined, CheckCircleOutlined } from "@ant-design/icons";
import styles from "../styles/Subscription.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;

export default function Subscription() {
  return (
    <div>
      <UserLayout>
        <Row 
          style={{justifyContent:"center",}}
        >
        
            <img src="./images/leaf.png"
              style={{opacity:"0.4", zIndex:"-1"}}
            />
        </Row>
        
        <Row style={{ justifyContent: "space-evenly", height: "700px" }}>
          <Card className={styles.subs} hoverable  >
            <p className={styles.names}>
              {" "}
              Silver{" "}
            </p>
            <img
              alt="example"
              src="./images/Silver-Icon.jpg"
              style={{ maxWidth: "42%", margin: "auto" }}
            />
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <p className={styles.price}>
              <sup>$</sup>
              <b>40</b>/month
            </p>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>

            <Button className={styles.btn}
              //   type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
             >
              Subscribe
            </Button>
          </Card>
          <Card className={styles.subs} hoverable >
            <p className={styles.names} >
              {" "}
              Gold{" "}
            </p>
            <img
              alt="example"
              src="./images/gold-Icon.jpg"
              style={{ maxWidth: "42%", margin: "auto" }}
            />
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <p className={styles.price}>
              <sup>$</sup>
              <b>60</b>/month
            </p>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>

            <Button className={styles.btn}
              //   type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
             >
              Subscribe
            </Button>
          </Card>
          <Card className={styles.subs} hoverable >
            <p className={styles.names} >
              {" "}
              Platinum{" "}
            </p>
            <img
              alt="example"
              src="./images/platinum-Icon.jpg"
              style={{ maxWidth: "42%", margin: "auto" }}
            />
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <p className={styles.price}>
              <sup>$</sup>
              <b>90</b>/month
            </p>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>
            <Row>
              {/* <i class="fa fa-check-circle" aria-hidden="true"></i> */}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#74cf4e" }}
              />
              <p className={styles.plans}>
                {" "}
                <b>
                  Randomized meal plan{" "}
                </b>
                : there
                <br /> Variation of the plan and the sum
                <br /> will be accurate etc.{" "}
              </p>
            </Row>

            <Button className={styles.btn}
              //   type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="large"
            >
              Subscribe
            </Button>
          </Card>
        </Row>
        <Row>
            <img src="./images/tomato.png" 
              style={{opacity:"0.4", zIndex:"-1", position:"relative", left:"50px;"}}
            />
        </Row>
    
      </UserLayout>
    </div>
  );
}
