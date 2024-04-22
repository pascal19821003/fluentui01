import {
    Button, Dropdown, Tab, TabList, makeStyles, shorthands, useId, Option, Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,
    Label,
} from '@fluentui/react-components';
import {CheckRegular} from '@fluentui/react-icons';
import React from 'react'

// Dropdown [ Option value] it don't work, Option cannot contain no-text elements. 



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
            <Label htmlFor="dropdown-id">Favorite Fruit</Label>
            <Dropdown id="dropdown-id">
                <Option value={"Simple text string haha"}  >
                     Simple text string
                </Option>
                <Option>Banana</Option>
            </Dropdown>
        </div>
    )

}
