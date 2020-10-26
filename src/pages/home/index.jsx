import React from 'react';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  return <div className={classes.outsideDiv}>Content here</div>;
}
