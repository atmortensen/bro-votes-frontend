import React, { useState, useEffect, useCallback } from 'react';
import { AppBar } from 'components';
import { List, Loader, Modal } from 'semantic-ui-react';
import http from 'helpers/http.helper';
import { BroNote } from 'components';
import { colors } from 'helpers/theme.helper';
import io from 'socket.io-client';
import styled from 'styled-components';

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #eaae00;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  max-width: 500px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;

function Home(props) {
  const [selectedFilter, setSelectedFilter] = useState('new');
  const [broNotes, setBroNotes] = useState([]);

  useEffect(() => {
    const socket = io.connect(process.env.REACT_APP_API_URL);
    socket.on('update', getBroNotes);

    return () => socket.off('update');
  });

  const getBroNotes = useCallback(() => {
    http()
      .get(`/bro-notes`)
      .then(res => {
        setBroNotes(res);
      })
      .catch(err => alert(err));
  }, []);

  const sortFunction = (a, b) => {
    if (selectedFilter === 'new') {
      a = new Date(a.created);
      b = new Date(b.created);
      return a > b ? -1 : 1;
    } else {
      a = a.yaBros.length - a.noBros.length;
      b = b.yaBros.length - b.noBros.length;
      return a > b ? -1 : 1;
    }
  };

  useEffect(() => {
    getBroNotes();
  }, [getBroNotes]);

  return (
    <div
      style={{
        backgroundColor: colors.secondary,
        paddingTop: 60,
        paddingBottom: 8,
        minHeight: '100vh'
      }}
    >
      <AppBar
        refresh={getBroNotes}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div style={{ paddingTop: 8 }}>
        {!broNotes.length ? (
          <Loader
            active
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              color: 'black'
            }}
            size="medium"
          >
            It's, loading, chill bro...
          </Loader>
        ) : (
          <List divided relaxed>
            {broNotes
              .filter(item =>
                selectedFilter === 'hof'
                  ? item.superBroNote
                  : !item.superBroNote
              )
              .sort(sortFunction)
              .map(note => (
                <BroNote key={note._id} note={note} refresh={getBroNotes} />
              ))}
          </List>
        )}
      </div>
      <Modal trigger={<Footer>How to use BroVotes</Footer>}>
        <Modal.Header>How to use BroVotes</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>
              Create a BroNote by clicking on the icon in the upper right hand
              corner.
            </p>
            <p>
              UpBro and DownBro other Bro's BroNotes and try to get on the Bros
              of Fame board.
            </p>
            <p>
              If your BroNote gets more than 5 DownBros your post will be
              deleted and your account will be suspended for 30 minutes.
            </p>
            <p>
              Any BroNotes that get into the Bros of Fame after 24 hours will be
              removed.
            </p>
            <p>- Stay Classy Bros ❤️</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default Home;
