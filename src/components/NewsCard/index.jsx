import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, Button, Row, Col } from 'reactstrap';
import './newsCard.css';
const NewsCard = ({data,onClick}) => {

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
        className='date'
      >
       {data.date}
      </CardText> <CardText
        tag="p"
      className='news-title'
      >
       {data.title}
      </CardText>
      <CardText
        tag="p"
   className='news-sub-title'
      >
       {data.subTitle}
      </CardText>   <CardText
        tag="p"
        className='date'
      >
       {data.desc.substring(0,103)}...
      </CardText> 
      <Row>
       <Col sm="6" xs="6">
      <Button onClick={onClick} size="sm" color="primary" outline style={{border:0,padding:0,textTransform:'initial'}}>View on map</Button>
      <Button onClick={onClick} size="sm" color="primary" outline style={{border:0,marginLeft:'20px',padding:0,textTransform:'initial'}}>Read more</Button>

       </Col>
      </Row>
    </Card>
  );
};

NewsCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default NewsCard;
