import {
    Button, ButtonProps, Checkbox, Dropdown,
    Spinner, Tooltip, buttonClassNames, makeStyles,
    shorthands, tokens, Option, useId,
    OptionGroup
} from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps } from '@fluentui/react-components';

// Dropdown OptionGroup


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyContent: "start",
        ...shorthands.gap('2px'),
        maxWidth: '400px',
    }
})


export default function PosterApp() {

    const styles = useStyles();
    const dropdownId = useId("dropdown-default");
    const land = ["Cat", "Dog", "Ferret", "Hamster"];
    const water = ["Fish", "Jellyfish", "Octopus", "Seal"];


    return (
        <div className={styles.root}>
            <label id={dropdownId}>Best pet</label>
            <Dropdown aria-labelledby={dropdownId} placeholder='Select an animal' >
                <OptionGroup label={"Land"}>
                    {land.map((option) => {
                        return (
                            <Option key={option} disabled={option === 'Ferret'}>{option}</Option>
                        )
                    })}
                </OptionGroup>

                <OptionGroup label={"Sea"}>
                    {water.map((option) => {
                        return (
                            <Option key={option}  >{option}</Option>
                        )
                    })}
                </OptionGroup>
            </Dropdown>
        </div>
    )
}
