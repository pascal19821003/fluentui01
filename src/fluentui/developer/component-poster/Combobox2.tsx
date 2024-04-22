import {
    Button, ButtonProps, Checkbox, Dropdown,
    Spinner, Tooltip, buttonClassNames, makeStyles,
    shorthands, tokens, Option, useId,
    OptionGroup,
    Persona,
    Combobox,
    OptionGroupProps
} from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps, ComboboxProps, OptionProps } from '@fluentui/react-components';

import { CheckmarkCircle20Filled } from '@fluentui/react-icons'

// Combobox Custom Options



const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyContent: "start",
        ...shorthands.gap('2px'),
        maxWidth: '400px',
    },
    listbox: {
        maxWidth: '200px',
    }
})

function CustomOption(props: OptionProps) {
    return (
        <Option {...props} checkIcon={<CheckmarkCircle20Filled />}></Option>
    )
}


function CustomOptionGroup(
    props: Partial<OptionGroupProps> & { options: string[] }
) {

    const { label, options, ...optionGroupProps } = props;
    const labelSlot = typeof label === 'object' ? label : { children: label };

    return (
        <>
            <OptionGroup label={{ style: { fontStyle: 'italic' }, ...labelSlot }} {...optionGroupProps} >
                {options.map((option) => (<CustomOption key={option} disabled={option === 'Ferret'}>{option}</CustomOption>))
                }
            </OptionGroup>
        </>
    )
}

export default function PosterApp(props: Partial<ComboboxProps>) {

    const styles = useStyles();
    const comboId = useId("combo-default")
    const land = ['Cat', 'Dog', 'Ferret', 'Hamster']
    const water = ['Fish', 'JellyFish', 'Octopus', 'Seal']


    return (
        <div className={styles.root}>
            <label id={comboId}         >Best Pet</label>
            <Combobox aria-labelledby={comboId}
                listbox={{ className: styles.listbox }}
                placeholder='Select an aminal'
                {...props}
            >
                <CustomOptionGroup label={"Land"} options={land} />
                <CustomOptionGroup label={"Sea"} options={water} />
            </Combobox>
        </div>
    )
}
