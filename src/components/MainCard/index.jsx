import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, Button, Row, Col, CardTitle } from 'reactstrap';
import './mainCard.css';
const MainCard = ({ data, onClick }) => {
  return (
    <Card
      body
      className="my-2"
      style={{
        width: '800px',
        textAlign: 'left',
        margin: 'auto',
      }}
    >
    <Row>
      <Col sm="6" xs="6">
      <CardTitle tag="p" className="main-title">
        {data.title}
      </CardTitle>
      <CardText tag="p" className="news-sub-title">
        {data.subTitle}
      </CardText>
      <CardText className="sub-title-2">
      Article Summary
      </CardText>
      <CardText tag="p" className="date">
        {data.desc}
      </CardText>
      </Col>
      <Col sm="6" xs="6">
        <p className='main-ids'>IHSG</p>
        <p className='main-num'>7.065,04</p>
        <p className='main-lil-num'>-35,72 (-0,50%)</p>
        <img src='src/assets/chart.png' style={{width:199}}/>
      </Col>
    </Row>
     
      <CardText className="sub-title-2" style={{ marginTop: '20px' }}>
    Project Summary
      </CardText>
      <CardText tag="p" className="date">
        {data.des2}
      </CardText>
      <Row><Row>
        {data?.data?.map((item, index) => (
          <Col sm="6" xs="6" key={index}>
            <p className="sub-title-2">{item.name}</p>
            <p className="sub-title-3">{item.desc}</p>
          </Col>
        ))}
      </Row>
      </Row>
      
      <Row>
        <Col sm="8" xs="8" style={{display:'flex',justifyContent:'space-between'}}>
          <Button
            onClick={onClick}
            size="sm"
            color="primary"
          >
            View Article
          </Button>
          <Button
            onClick={onClick}
            size="sm"
            color="primary"

          >
            View Project
          </Button> 
           <Button
            onClick={onClick}
            size="sm"
            color="primary"

          >
            View Company
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

MainCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default MainCard;
