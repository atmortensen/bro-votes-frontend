import React, { useState } from 'react';
import { Modal, Input, Button, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import http from 'helpers/http.helper';

function ComposeBroNote(props) {
  const { open, onClose, refresh } = props;

  const [error, setError] = useState('');
  const [broNote, setBroNote] = useState('');

  const postBro = () => {
    if (broNote.length > 140) {
      setError('Too long of a bro, bro.');
    } else {
      http()
        .post(`/bro-notes`, {
          note: broNote
        })
        .then(() => {
          onClose();
          refresh();
        })
        .catch(e => setError(e));
    }
  };

  const BroCount = styled.p`
    margin-top: 6px;
    margin-left: 2px;
    font-family: roboto;
    font-size: 10px;
    color: ${broNote.length > 140 ? '#FF0000' : '#A6A6A6'};
  `;

  return (
    <Modal open={open}>
      <Modal.Header>Bro Note</Modal.Header>
      <Modal.Content>
        {error && (
          <Header as="h4" color="red">
            {error}
          </Header>
        )}
        <Input
          fluid
          onChange={e => setBroNote(e.target.value)}
          placeholder="Say something to the bros..."
        />
        <BroCount>{broNote.length}/140</BroCount>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}
        >
          <Button onClick={onClose}>cancel</Button>
          <Button disabled={!broNote} color="yellow" onClick={postBro}>
            submit
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default ComposeBroNote;
