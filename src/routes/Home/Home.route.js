import React, { useState, useEffect, useCallback } from 'react';
import { useBroLocation } from 'helpers/location.helper';
import { AppBar } from 'components';
import { List } from 'semantic-ui-react';
import moment from 'moment';
import http from 'helpers/http.helper';
import { BroNote } from 'components';

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
    <div>
      <AppBar broLocation={broLocation} setSelectedFilter={setSelectedFilter} />
      <div style={{ marginTop: 60 }}>
        <List divided relaxed>
          <BroNote />
        </List>
      </div>
    </div>
  );
}

export default Home;
