import React from 'react';
import './Skeleton.css';

interface Props {
    type: string;
}

const ImageSkeletonElement : React.FC<Props> = ({ type} : Props) => {
  const classes = `skeleton ${type}`;

  return (
    
    <div className={classes + " col"}></div>
  )
}

export default ImageSkeletonElement;