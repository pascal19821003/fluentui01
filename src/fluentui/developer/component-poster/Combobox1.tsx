import {
    Button, ButtonProps, Checkbox, Dropdown,
    Spinner, Tooltip, buttonClassNames, makeStyles,
    shorthands, tokens, Option, useId,
    OptionGroup,
    Persona,
    Combobox
} from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps } from '@fluentui/react-components';

// Combobox


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
    const comboId = useId("combo-default")
    const options = ['Cat', 'Dog', 'Ferret', 'Fish', 'Hamster', 'Snake']


    return (
        <div className={styles.root}>
            <label id={comboId}         >Best Pet</label>
            <Combobox aria-labelledby={comboId}  >
                {options.map((option) => {
                    return (<Option key={option} disabled={option === 'Ferret'}>
                        {option}
                    </Option>)
                })}
            </Combobox>
        </div>
    )
}
