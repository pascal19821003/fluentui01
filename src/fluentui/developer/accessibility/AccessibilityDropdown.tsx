import { Button, Dropdown, Tab, TabList, makeStyles, shorthands, useId, Option } from '@fluentui/react-components'
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
            <label id={dropdownId}>Best pet</label>
            <Dropdown aria-labelledby={dropdownId} placeholder='Select an animal' >
                {options.map((option) => {
                    return (
                        <Option key={option} disabled={option === 'Ferret'} aria-label={`${option} haha.`} >{option}</Option>
                    )
                })}
            </Dropdown>
        </div>
    )
     
}
