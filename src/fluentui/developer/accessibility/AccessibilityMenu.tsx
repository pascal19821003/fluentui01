import {
    Button, Dropdown, Tab, TabList, makeStyles, shorthands, useId, Option, Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,
} from '@fluentui/react-components'
import React from 'react'


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
    const dropdownId = useId("dropdown-default");

    const options = [
        "Cat",
        "Caterpillar",
        "Corgi",

    ]

    return (
        <div className={styles.root}>
            <Menu>
                <MenuTrigger disableButtonEnhancement>
                    <Button>Toggle menu</Button>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem aria-label='haha New'>New </MenuItem>
                        <MenuItem aria-label='haha new window'>New Window</MenuItem>
                        <MenuItem disabled aria-label='haha open file'>Open File</MenuItem>
                        <MenuItem aria-label='haha open folder'>Open Folder</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    )

}
