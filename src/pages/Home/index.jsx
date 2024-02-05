import React from 'react';
import styles from './home.module.css';
import { CustomButton, ProjectCard, NewsCard } from '@/components';
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
    </div>
  );
};

export default index;
