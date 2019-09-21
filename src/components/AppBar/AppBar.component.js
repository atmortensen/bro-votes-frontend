import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { colors } from 'helpers/theme.helper';
import styled from 'styled-components';
import { useBroLocation } from 'helpers/location.helper';
import ComposeBroNote from './modals/ComposeBroNote.modal';

const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: ${colors.secondaryAccent};
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  max-width: 500px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

function AppBar(props) {
  const { selectedFilter, setSelectedFilter, refresh } = props;
  const [openNewBroNote, setOpenNewBroNote] = useState(false);
  const broLocation = useBroLocation();

  const signThisBroOut = () => {
    var logBroOut = window.confirm('Bro out?');

    if (logBroOut === true) {
      window.localStorage.removeItem('token');
      window.location.reload();
    }
  };

  return (
    <AppBarContainer>
      <ComposeBroNote
        open={openNewBroNote}
        broLocation={broLocation}
        refresh={refresh}
        onClose={() => setOpenNewBroNote(false)}
      />
      <IconContainer>
        <Icon
          onClick={signThisBroOut}
          style={{ marginLeft: 16 }}
          inverted
          size="large"
          name="sign-out"
        />
      </IconContainer>

      <div style={{ margin: 'auto' }}>
        <Button.Group size="small">
          <Button
            active={selectedFilter === 'hof'}
            color={selectedFilter === 'hof' ? 'yellow' : undefined}
            onClick={() => setSelectedFilter('hof')}
          >
            <Icon name="trophy" />
          </Button>
          <Button
            active={selectedFilter === 'hot'}
            color={selectedFilter === 'hot' ? 'yellow' : undefined}
            onClick={() => setSelectedFilter('hot')}
          >
            <Icon name="fire" />
          </Button>
          <Button
            active={selectedFilter === 'new'}
            color={selectedFilter === 'new' ? 'yellow' : undefined}
            onClick={() => setSelectedFilter('new')}
          >
            <Icon name="bullhorn" />
          </Button>
        </Button.Group>
      </div>

      <IconContainer>
        <Icon
          disabled={!broLocation}
          style={{ marginRight: 16 }}
          size="large"
          inverted
          name="paper plane outline"
          onClick={() => setOpenNewBroNote(true)}
        />
      </IconContainer>
    </AppBarContainer>
  );
}

export default AppBar;
