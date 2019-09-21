import React from 'react';
import { Icon } from 'semantic-ui-react';
import moment from 'moment';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const NoteContainer = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BroVoteContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Note = styled.p`
  font-family: roboto;
  font-size: 14px;
  font-weight: 600;
  color: #00000;
`;

const NoteTime = styled.p`
  font-family: roboto;
  font-size: 10px;
  font-weight: 400;
  color: #525252;
`;

function BroNote(props) {
  const { note } = props;

  return (
    <ListContainer>
      <NoteContainer>
        <div style={{ width: '100%' }}>
          <Note>{note.note}</Note>
        </div>
        <div style={{ width: '100%' }}>
          <NoteTime>{moment(note.created).format('LLL')}</NoteTime>
        </div>
      </NoteContainer>

      <BroVoteContainer>
        <div style={{ margin: 'auto' }}>
          <div style={{ width: '100%', marginLeft: 4 }}>
            <Icon name="chevron up" />
          </div>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <p>187</p>
          </div>
          <div style={{ width: '100%', marginLeft: 4 }}>
            <Icon name="chevron down" />
          </div>
        </div>
      </BroVoteContainer>
    </ListContainer>
  );
}

export default BroNote;
