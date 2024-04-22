import React from 'react';
import logo from './logo.svg';
// import './App.css';
import AccessbilityApp from '../../../accessiblity/css_javascrpt/AccessbilityApp';
import {
  BrandVariants, FluentProvider, createDarkTheme, createLightTheme, teamsHighContrastTheme, webDarkTheme, webLightTheme,

  makeStyles,
  tokens,
  teamsDarkTheme,
  teamsLightTheme,
  Theme,
  themeToTokensObject,
  shorthands
} from '@fluentui/react-components';
import { QuickStart, AdvancedConfiguration } from '../../index'
import GriffelApp from '../../../griffel/GriffelApp';
import SlotApp from '../slots/SlotApp';


const customBrandRamp: BrandVariants = {
  10: '#2b2b40',
  20: '#2f2f4a',
  30: '#333357',
  40: '#383966',
  50: '#3d3e78',

  60: '#44791',
  70: '#4f52b2',
  80: '#5b5fc7',
  90: '#7579eb',
  100: '#7f85f5',

  110: '#9299f7',
  120: '#aab1fa',
  130: '#b6bcfa',
  140: '#c5cbfa',
  150: '#dce0fa',

  160: '#e8ebfa'
}

export const customLightTheme = createLightTheme(customBrandRamp)
export const customDarkTheme = createDarkTheme(customBrandRamp)

export const customLightTheme2: Theme & { customSpacingVerticalHuge: string } = {
  ...webLightTheme,
  customSpacingVerticalHuge: '128px',
}

export const customTokens = themeToTokensObject(customLightTheme2);

const useStyle = makeStyles({
  root: { color: tokens.colorBrandForeground1 },
  mytoken: {
    ...shorthands.border('1px', 'solid', 'green'),
    paddingTop: customTokens.customSpacingVerticalHuge,
  }
})

const handleClick: React.MouseEventHandler<HTMLDivElement> = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  console.log(event.target)
  console.log("ok")
}

function AppThemeing() {
  const styles = useStyle()
  return (
    <FluentProvider theme={customLightTheme2}>
      <div className={styles.root} onClick={handleClick}>
        aaaa
      </div>
      <div className={styles.mytoken}>bbbb</div>
    </FluentProvider>

  );
}

export default AppThemeing;
