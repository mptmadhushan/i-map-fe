import React from 'react';
import './home.css';
import { CustomButton, ProjectCard, NewsCard, MainCard } from '@/components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const index = () => {
  const position = [51.505, -0.09];
  const dataNewsCard = {
    id: 1,
    title: 'Monument Announces Update at the Selinsing Gold Mine in Malaysia',
    subTitle: 'Monument Mining Limited',
    date: '12/01/2024',
    desc: 'Monument Mining Limited (TSX-V: MMY and FSE: D7Q1) ("Monument" or the "Company") is pleased to announce Monument Mining Limited (TSX-V: MMY and FSE: D7Q1) ("Monument" or the "Company") is pleased to announce',
  };
  const handleClick = () => {
    alert('Button Clicked!');
  };
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          margin: '20px',
          borderRadius: '16px',
          width: '60vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div
        style={{
          width: '40vw',
          display: 'flex',
          paddingTop: '20px',
          flexDirection: 'column',
          height: '100vh',
          alignContent:'flex-start',
          alignSelf:'flex-start',
          
          overflowY: 'auto',
        }}
      >
        <p className="art-title">Article</p>
        {array.map((item, index) => (
          <NewsCard
            key={index}
            onClick={handleClick}
            data={dataNewsCard}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
