import { Button, ButtonProps, Checkbox, Spinner, Tooltip, buttonClassNames, makeStyles, shorthands, tokens } from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps } from '@fluentui/react-components';

// Checkbox required


const useStyles = makeStyles({

})


export default function PosterApp() {

    const styles = useStyles();


    return (
        <div >
            <Checkbox label={"App options"} required shape={'circular'} />

        </div>
    )
}
