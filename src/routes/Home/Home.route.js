import React, { useState, useEffect, useCallback } from 'react';
import { useBroLocation } from 'helpers/location.helper';
import { AppBar } from 'components';
import { List } from 'semantic-ui-react';
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
        minHeight: '100vh'
      }}
    >
      <AppBar
        refresh={getBroNotes}
        broLocation={broLocation}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div style={{ paddingTop: 8 }}>
        <List divided relaxed>
          {broNotes.sort(sortFunction).map(note => (
            <BroNote key={note._id} note={note} refresh={getBroNotes} />
          ))}
        </List>
      </div>
    </div>
  );
}

export default Home;
