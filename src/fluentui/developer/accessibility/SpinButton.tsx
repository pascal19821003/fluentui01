import {
    Button, Dropdown, Tab, TabList, makeStyles, shorthands, useId, Option, Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,
    Label,
    SpinButton,
} from '@fluentui/react-components';
import {CheckRegular} from '@fluentui/react-icons';
import React from 'react'

// SpinButton



const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyContent: "start",
        ...shorthands.gap('2px'),
        maxWidth: '400px',
    }
})

export default function AccessibilityApp() {
    const styles = useStyles();


    return (
        <div className={styles.root}>
            <Label htmlFor='example-spinbutton'>A SpinButton</Label>
            <SpinButton id={"example-spinbutton"} defaultValue={10 } ></SpinButton>
        </div>
    )

}
