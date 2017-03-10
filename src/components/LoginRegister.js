import React, { Component } from 'react';
import { Box, Button, Column, FormHorizontal, Group, Input, Label, Section} from 're-bulma';

class App extends Component {
  render() {
    return (
      <Section>
        <h1>Create an Account</h1>
        <Column>
        <Box>
          <Label>Username:</Label>
          <Input
            color="isSuccess"
            type="text"
            placeholder="Username..."
            defaultValue=""
            icon="fa fa-check"
            hasIconRight
            help={{
              color: 'isSuccess',
              text: 'This username is available',
            }}
          />
          <Label>Email:</Label>
          <Input
            color="isSuccess"
            type="text"
            placeholder="Email..."
            defaultValue=""
            icon="fa fa-check"
            hasIconRight
            help={{
              color: 'isSuccess',
              text: 'This username is available',
            }}
          />
          <Label>Password</Label>
          <Input
            color="isSuccess"
            type="password"
            placeholder="Password..."
            defaultValue=""
            icon="fa fa-check"
            hasIconRight
            help={{
              color: 'isSuccess',
              text: 'This username is available',
            }}
          />
        </Box>
      </Column>
      </Section>
    );
  }
}

export default App;
