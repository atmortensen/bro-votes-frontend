import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import moment from 'moment';

function BroNote(props) {
  const { note } = props;

  return (
    <div
      style={{
        width: '100%',
        padding: 8,
        display: 'flex',
        flexWrap: 'nowrap'
      }}
    >
      <div style={{ width: '80%' }}>
        <List.Header>
          Demo Bro note: It is a long established fact that a reader will be
          distracted by the readable content of a page
        </List.Header>
        <List.Description>{moment().format('LLL')}</List.Description>
      </div>
      <div
        style={{
          width: '20%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <div
          style={{
            margin: 'auto'
          }}
        >
          <div style={{ width: '100%' }}>
            <Icon name="chevron up" />
          </div>
          <div style={{ width: '100%' }}>
            <p>214</p>
          </div>
          <div style={{ width: '100%' }}>
            <Icon name="chevron down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BroNote;
