import React, {Component} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as theme, dark as darkTheme} from '@eva-design/eva';
import {AppNavigator} from './src/navigation.component';
import {default as appTheme} from './custom-theme.json';

const themes = {...theme, ...appTheme};

class App extends Component {
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={themes}>
        <IconRegistry icons={EvaIconsPack} />
        <AppNavigator />
      </ApplicationProvider>
    );
  }
}

export default App;
