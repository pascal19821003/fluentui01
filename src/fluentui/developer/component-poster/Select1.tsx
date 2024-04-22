import {
    Button, ButtonProps, Checkbox, Dropdown,
    Spinner, Tooltip, buttonClassNames, makeStyles,
    shorthands, tokens, Option, useId,
    OptionGroup,
    Persona,
    Combobox,
    OptionGroupProps,
    Select,
} from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps, ComboboxProps, OptionProps, SelectProps } from '@fluentui/react-components';

import { CheckmarkCircle20Filled } from '@fluentui/react-icons'

// Select  



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

export default function PosterApp(props:  SelectProps) {

    const styles = useStyles();
    const selectId = useId('select-default')
    
    return (
        <div >
             <label htmlFor={selectId}>Color</label>
             <Select id={selectId} {...props}>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
             </Select>
        </div>
    )
}
