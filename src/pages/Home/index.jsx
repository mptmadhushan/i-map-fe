import React from 'react';
import styles from './home.module.css';
import { CustomButton } from '@/components';
import {useIsMobile } from '@/utils/hooks';

const index = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  const isMobile = useIsMobile();

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
    </div>
  );
};

export default index;
