import { Button, Tab, TabList, makeStyles, shorthands, useId } from '@fluentui/react-components'
import React from 'react'

const useStyles = makeStyles({
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      ...shorthands.padding("50px", "20px"),
      rowGap: "20px",
    },
  });

export default function AccessibilityApp() {

const styles=useStyles();

    return (
        <div className={styles.root}>
            <TabList>
                <Tab value="tab1">tab1</Tab>
                <Tab value="tab2" arial-label={"Files tab is active"}>tab2</Tab>
                <Tab value="tab3">tab3</Tab>
                <Tab value="tab4">tab4</Tab>
            </TabList>
        </div>
    )
}
