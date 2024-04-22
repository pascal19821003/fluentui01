import { Button, ButtonProps, Checkbox, Spinner, Tooltip, buttonClassNames, makeStyles, shorthands, tokens } from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps } from '@fluentui/react-components';

// Checkbox mixed


const useStyles = makeStyles({

})


export default function PosterApp() {

    const styles = useStyles();

    const [checked1, setChecked1] = useState<CheckboxProps['checked']>(true)
    const [checked2, setChecked2] = useState<CheckboxProps['checked']>(true)
    const [checked3, setChecked3] = useState<CheckboxProps['checked']>(false)
    const checkAll: CheckboxProps['checked'] = checked1 && checked2 && checked3 ? true :
        (checked1 === false && checked2 === false && checked3 === false)  ? false : 'mixed'

    console.log("checkAll", checkAll)

    const toggleAll = () => {
        if (checked1 === true && checked2 === true && checked3 === true) {
            setChecked1(false);
            setChecked2(false);
            setChecked3(false);
        } else {
            setChecked1(true);
            setChecked2(true);
            setChecked3(true);
        }
    }

    return (
        <div >
            <Checkbox checked={checkAll} onChange={toggleAll} label={"App options"} />
            <Checkbox checked={checked1} onChange={(ev, data) => {
                setChecked1(data.checked)
            }} label={"Option1"} />
            <Checkbox checked={checked2} onChange={(ev, data) => {
                setChecked2(data.checked)
            }} label={"Option2"} />
            <Checkbox checked={checked3} onChange={(ev, data) => {
                setChecked3(data.checked)
            }} label={"Option3"} />
        </div>
    )
}
