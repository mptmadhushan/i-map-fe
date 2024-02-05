import React from 'react';
import styles from './home.module.css';
import { CustomButton, ProjectCard, NewsCard,MainCard } from '@/components';
import { useIsMobile } from '@/utils/hooks';

const index = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  const isMobile = useIsMobile();
  const dataProjectCard = {
    id: 1,
    title: 'Acme Project',
    subTitle: 'Colombo, Sri Lanka',
    data: [
      {
        name: 'Commodities(s)',
        desc: 'Gold',
      },
      {
        name: 'Status',
        desc: 'Advanced Exploration',
      },
      {
        name: 'Size',
        desc: '150.3 sq kms',
      },
      {
        name: 'Ownership',
        desc: 'Monument Mining Limited',
      },
    ],
  };
  const dataNewsCard = {
    id: 1,
    title: 'Monument Announces Update at the Selinsing Gold Mine in Malaysia',
    subTitle: 'Monument Mining Limited',
    date: '12/01/2024',
    desc: 'Monument Mining Limited (TSX-V: MMY and FSE: D7Q1) ("Monument" or the "Company") is pleased to announce Monument Mining Limited (TSX-V: MMY and FSE: D7Q1) ("Monument" or the "Company") is pleased to announce',
  }; const dataMainCard = {
    id: 1,
    title: 'Selinsing Project',
    subTitle: 'Monument Mining',
    data: [
      {
        name: 'Location',
        desc: 'Kuala Lumpur, Selangor',
      },
      {
        name: 'Size',
        desc: '150.3 sq kms',
      },
      {
        name: 'Commodities(s)',
        desc: 'Gold',
      },
      {
        name: 'Ownership',
        desc: 'Monument Mining Limited',
      },{
        name: 'Status',
        desc: 'Advanced Exploration',
      },
    ],
    des1: 'Monument Mining Limited (TSX-V: MMY and FSE: D7Q1) ("Monument" or the "Company") is pleased to announce that they have found gold!',
    des2: 'Located in the Central Gold Belt of Western Malaysia, the Selinsing Gold Mine covers a total area of 150.3km2 and includes the Selinsing, Buffalo Reef, Felda Land, Peranggih and Famehub properties. The mine is situated 158km north of Kuala Lumpur and has a gold processing plant and infrastructure buildings that are easily accessible from all the nearby properties.',
    
    desc: 'Monument Mining Limited (TSX-V: MMY and FSE: D7Q1) ("Monument" or the "Company") is pleased to announce Monument Mining Limited (TSX-V: MMY and FSE: D7Q1) ("Monument" or the "Company") is pleased to announce',
  };
  return (
    <div className={styles.root}>
      <h1>{isMobile ? 'Mobile View' : 'Desktop View'}</h1>
      <h3>iMap</h3>
      <CustomButton
        onClick={handleClick}
        label="Test Button"
        color="primary"
        backgroundColor="gray"
      />
      <div>
        
      </div>
      <ProjectCard onClick={handleClick} data={dataProjectCard} />
      <NewsCard onClick={handleClick} data={dataNewsCard} />
      <MainCard onClick={handleClick} data={dataMainCard} />
    </div>
  );
};

export default index;
