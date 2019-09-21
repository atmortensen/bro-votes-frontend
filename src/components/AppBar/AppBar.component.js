import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { colors } from 'helpers/theme.helper';

function AppBar(props) {
  const { setSelectedFilter, broLocation } = props;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: '60px',
        backgroundColor: `${colors.secondaryAccent}`,
        display: 'flex'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon
          style={{ marginLeft: 16 }}
          inverted
          color="grey"
          size="large"
          name="cog"
        />
      </div>
      <div style={{ margin: 'auto' }}>
        <Button.Group size="mini">
          <Button onClick={() => setSelectedFilter('hof')}>HoF</Button>
          <Button onClick={() => setSelectedFilter('hot')}>Hot</Button>
          <Button onClick={() => setSelectedFilter('new')}>New</Button>
        </Button.Group>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon
          style={{ marginRight: 16 }}
          size="large"
          inverted
          color="grey"
          name="edit"
        />
      </div>
    </div>
  );
}

export default AppBar;
