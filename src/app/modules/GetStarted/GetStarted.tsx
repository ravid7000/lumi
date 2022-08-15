import React from 'react';

// atoms
import Typography from 'atoms/Typography';
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListRoot,
  Root,
  UserSavedRoot,
} from './GetStarted.styles';
import Box from 'atoms/Box';

interface GetStartedProps {
  items: { id: string; name: string }[];
  templates: { id: string; name: string }[];
}

function GetStarted({}: GetStartedProps): JSX.Element {
  return (
    <Root
      p={20}
      noRadius
      noShadow
      displayType="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container
        displayType="flex"
        noShadow
        noRadius
      >
        <ListRoot>
          <List>
            <ListItem>
              <ListItemButton>
                <Typography text="Blank" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Typography text="Material UI" />
              </ListItemButton>
            </ListItem>
          </List>
        </ListRoot>
        <UserSavedRoot>
          <Typography text="Get Started Screen" />
        </UserSavedRoot>
      </Container>
    </Root>
  );
}

GetStarted.defaultProps = {
  items: [],
  templates: [],
};

export default GetStarted;
