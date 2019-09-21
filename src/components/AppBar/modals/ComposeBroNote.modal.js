import React, { useState } from 'react';
import { Modal, Input, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import http from 'helpers/http.helper';

function ComposeBroNote(props) {
  const { open, onClose, broLocation, refresh } = props;

  const [broNote, setBroNote] = useState('');

  const postBro = () => {
    http()
      .post(`/bro-notes`, {
        latitude: broLocation.lat,
        longitude: broLocation.long,
        note: broNote
      })
      .then(() => {
        onClose();
        refresh();
      });
  };

  const BroCount = styled.p`
    margin-top: 6px;
    margin-left: 2px;
    font-family: roboto;
    font-size: 10px;
    color: ${broNote.length > 10 ? '#FF0000' : '#A6A6A6'};
  `;

  return (
    <Modal open={open}>
      <Modal.Header>Bro Note</Modal.Header>
      <Modal.Content>
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
          <Button onClick={postBro}>submit</Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default ComposeBroNote;
