import React, { useState, useEffect, useCallback } from 'react';
import { useBroLocation } from 'helpers/location.helper';
import { AppBar } from 'components';
import { List } from 'semantic-ui-react';
import moment from 'moment';
import http from 'helpers/http.helper';
import { BroNote } from 'components';
import { colors } from 'helpers/theme.helper';

function Home(props) {
  const [error, setError] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('new');
  const [broNotes, setBroNotes] = useState([]);
  const broLocation = useBroLocation();

  const getBroNotes = useCallback(() => {
    if (broLocation) {
      http()
        .get(
          `/bro-notes?latitude=${broLocation.lat}&longitude=${broLocation.long}`
        )
        .then(res => {
          setBroNotes(res);
        })
        .catch(err => setError(err));
    }
  }, [broLocation]);

  // const _renderFilter = useCallback(() => {
  //   broNotes.
  // }, [selectedFilter]);

  useEffect(() => {
    getBroNotes();
  }, [getBroNotes]);

  console.log(broNotes);

  return (
    <div
      style={{
        backgroundColor: colors.secondary,
        paddingTop: 60,
        minHeight: '100vh'
      }}
    >
      <AppBar
        broLocation={broLocation}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div style={{ paddingTop: 8 }}>
        <List divided relaxed>
          {broNotes.map(note => (
            <BroNote key={note.id} note={note} />
          ))}
          <BroNote
            key={'test'}
            note={{
              note:
                'I hacked the Statue of Liberty using only HTML, CS, and Vanilla JS',
              created: moment()
            }}
          />
        </List>
      </div>
    </div>
  );
}

export default Home;
