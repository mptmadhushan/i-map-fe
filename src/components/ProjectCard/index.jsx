import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import './projectCard.css';
const ProjectCard = ({data,onClick}) => {

  return (
    <Card
      body
      className="my-2"
      style={{
        width: '500px',
        textAlign: 'left',
        margin: 'auto',
      }}
    >
      <CardText
        tag="p"
        style={{
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '21.6px',
        }}
      >
       {data.title}
      </CardText>
      <CardText
        tag="p"
        style={{
          color: '#3B71CA',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '19.2px',
        }}
      >
       {data.subTitle}
      </CardText>
      <Row>
        {data?.data?.map((item, index) => (
          <Col sm="6" xs="6" key={index}>
            <p className="sub-title-2">{item.name}</p>
            <p className="sub-title-3">{item.desc}</p>
          </Col>
        ))}
      </Row>
      <Row>
       <Col sm="6" xs="6">
      <Button onClick={onClick} size="sm" color="primary" outline style={{border:0,margin:0,padding:0}}>View details</Button>

       </Col>
      </Row>
    </Card>
  );
};

ProjectCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectCard;
