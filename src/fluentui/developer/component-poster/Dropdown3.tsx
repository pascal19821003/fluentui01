import {
    Button, ButtonProps, Checkbox, Dropdown,
    Spinner, Tooltip, buttonClassNames, makeStyles,
    shorthands, tokens, Option, useId,
    OptionGroup,
    Persona
} from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps } from '@fluentui/react-components';

// Dropdown ComplexOptions


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
                <Option text='Katri Athokas'  >
                    <Persona avatar={{ color: 'colorful', 'aria-hidden': true }} name="Katri Athokas"
                        presence={{ status: "available" }} secondaryText={"Available"} />
                     
                </Option>
                <Option text='Elvia Atkins'  >
                    <Persona avatar={{ color: 'colorful', 'aria-hidden': true }} name="Elvia Atkins"
                        presence={{ status: "busy" }} secondaryText={"Busy"} />
                     
                </Option>
                <Option text='Cameron Evans'  >
                    <Persona avatar={{ color: 'colorful', 'aria-hidden': true }} name="Cameron Evans"
                        presence={{ status: "away" }} secondaryText={"Away"} />
                     
                </Option>
                <Option text='Wanda Howard'  >
                    <Persona avatar={{ color: 'colorful', 'aria-hidden': true }} name="Wanda Howard"
                        presence={{ status: "out-of-office" }} secondaryText={"Out of office"} />
                     
                </Option>
            </Dropdown>
        </div>
    )
}
