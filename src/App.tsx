import React from 'react';
import logo from './logo.svg';
// import './App.css';
import AccessbilityApp from './accessiblity/css_javascrpt/AccessbilityApp';
import { FluentProvider, teamsHighContrastTheme, webDarkTheme, webLightTheme } from '@fluentui/react-components';
import { QuickStart, AdvancedConfiguration } from './fluentui/index'
import GriffelApp from './griffel/GriffelApp';
import SlotApp from './fluentui/developer/slots/SlotApp';
import GriffelApp2 from './griffel/GriffelApp2';
import GriffelApp8 from './griffel/GriffelApp8';
import PosterApp from './fluentui/developer/component-poster/PosterApp';
import AccessibilityApp from './fluentui/developer/accessibility/AccessibilityApp';

function App() {
  return (
    <FluentProvider theme={webLightTheme} >
      <div  >
        {/* <AccessbilityApp /> */}
        {/* <QuickStart/> */}
        {/* <AdvancedConfiguration/> */}
        {/* <GriffelApp8/> */}
        {/* <SlotApp /> */}
        <PosterApp />
        {/* <AccessibilityApp /> */}
      </div>
    </FluentProvider>

  );
}

export default App;
