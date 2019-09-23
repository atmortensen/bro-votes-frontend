import React, { useContext } from 'react';
import { Icon, Header } from 'semantic-ui-react';
import moment from 'moment';
import styled from 'styled-components';
import http from 'helpers/http.helper';
import { BroContext } from 'contexts/Bro.context';

const ListContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
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
  const { note, refresh } = props;
  const { bro } = useContext(BroContext);
  const broCount = note.yaBros.length - note.noBros.length;

  const castBroVote = value => {
    if (note.superBroNote) return;
    http()
      .post(`/bro-votes`, {
        broNoteId: note._id,
        value: value
      })
      .then(() => refresh())
      .catch(e => alert(e));
  };

  return (
    <ListContainer>
      <NoteContainer>
        <div style={{ width: '100%' }}>
          <Note>{note.note}</Note>
        </div>
        <div style={{ width: '100%' }}>
          <NoteTime>{moment(note.created).fromNow()}</NoteTime>
        </div>
      </NoteContainer>

      <BroVoteContainer>
        <div style={{ margin: 'auto' }}>
          <div style={{ width: '100%', marginLeft: 4 }}>
            <Icon
              style={{ cursor: 'pointer' }}
              name="chevron up"
              color={note.yaBros.includes(bro._id) ? 'green' : 'grey'}
              onClick={() => castBroVote(1)}
            />
          </div>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Header
              as="h4"
              color={broCount < 0 ? 'red' : broCount > 0 ? 'green' : 'grey'}
            >
              {broCount}
            </Header>
          </div>
          <div style={{ width: '100%', marginLeft: 4 }}>
            <Icon
              style={{ cursor: 'pointer' }}
              name="chevron down"
              color={note.noBros.includes(bro._id) ? 'red' : 'grey'}
              onClick={() => castBroVote(-1)}
            />
          </div>
        </div>
      </BroVoteContainer>
    </ListContainer>
  );
}

export default BroNote;
