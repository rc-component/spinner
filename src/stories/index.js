import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Spin from '../index';

const boxStyles = {
  width: 200,
  height: 200,
  position: 'relative',
  backgroundColor: '#000',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center'
}

storiesOf('Spin', module)
  .add('black spin', () => {
    return (
      <Spin lineWidth={1} color="#111111"/>
  )})
  .add('white spin', () => {
    return (
      <div style={boxStyles}>
        <Spin color="#ffffff"/>
      </div>
    )
  })
