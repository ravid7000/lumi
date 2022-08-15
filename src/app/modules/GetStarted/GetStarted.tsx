import React from 'react';

// atoms
import Typography from 'atoms/Typography';
import Box from 'atoms/Box';

import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListRoot,
  Root,
  UserSavedRoot,
} from './GetStarted.styles';

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
            <ListItem
              withBorder
              withSpacing
            >
              <Typography
                variant="h6"
                text="Templates"
                mb="xs"
              />
            </ListItem>
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
          <Box
            displayType="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Typography text="No saved file found. Create new from template." />
          </Box>
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
