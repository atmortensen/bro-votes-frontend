import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { colors } from 'helpers/theme.helper';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: ${colors.secondaryAccent};
  display: flex;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

function AppBar(props) {
  const { selectedFilter, setSelectedFilter, broLocation } = props;
  return (
    <AppBarContainer>
      <IconContainer>
        <Icon
          style={{ marginLeft: 16 }}
          inverted
          color="grey"
          size="large"
          name="cog"
        />
      </IconContainer>

      <div style={{ margin: 'auto' }}>
        <Button.Group size="mini">
          <Button
            active={selectedFilter === 'hof'}
            onClick={() => setSelectedFilter('hof')}
          >
            HoF
          </Button>
          <Button
            active={selectedFilter === 'hot'}
            onClick={() => setSelectedFilter('hot')}
          >
            Hot
          </Button>
          <Button
            active={selectedFilter === 'new'}
            onClick={() => setSelectedFilter('new')}
          >
            New
          </Button>
        </Button.Group>
      </div>

      <IconContainer>
        <Icon
          style={{ marginRight: 16 }}
          size="large"
          inverted
          color="grey"
          name="edit"
        />
      </IconContainer>
    </AppBarContainer>
  );
}

export default AppBar;
