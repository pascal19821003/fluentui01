import {
    Button, Dropdown, Tab, TabList, makeStyles, shorthands, useId, Option, Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,
    Label,
} from '@fluentui/react-components'
import React from 'react'

// Dropdown label

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
        <>
            <div className={styles.root}>
                <Label htmlFor="dropdown-id">Favorite Fruit</Label>
                <Dropdown id="dropdown-id">
                    <Option>Apple</Option>
                    <Option>Banana</Option>
                </Dropdown>
            </div>

            <div className={styles.root}>
                <Dropdown aria-label='Favorite Fruit 22'>
                    <Option>Apple</Option>
                    <Option>Banana</Option>
                </Dropdown>
            </div>

            <div className={styles.root} >
                <Label id="label-id">Favorite Fruit 33</Label>
                <Dropdown aria-labelledby="label-id" inlinePopup={true}>
                    <Option>Apple</Option>
                    <Option>Banana</Option>
                </Dropdown>
            </div>
        </>
    )

}
