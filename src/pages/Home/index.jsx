import React from 'react';
import styles from './home.module.css';
import { CustomButton,ProjectCard } from '@/components';
import {useIsMobile } from '@/utils/hooks';

const index = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  const isMobile = useIsMobile();
  const dataProjectCard = {
    id:1,
    title:'Acme Project',
    subTitle:'Colombo, Sri Lanka',
    data:[
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
    },]
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
      <ProjectCard  onClick={handleClick} data={dataProjectCard} title="" subTitle=""/>
    </div>
  );
};

export default index;
