import React, { Component } from 'react';
import { Box, Button, ControlLabel, FormHorizontal, Group, Input, Label, Section} from 're-bulma';

class App extends Component {
  render() {
    return (
      <Section>
        <h1>Login an Account</h1>
        <Box>
          <FormHorizontal>
            <ControlLabel>Username</ControlLabel>
            <Group>
              <Input type="text" placeholder="Name" isExpanded />
            </Group>
          </FormHorizontal>
        </Box>
      </Section>
    );
  }
}

export default App;
