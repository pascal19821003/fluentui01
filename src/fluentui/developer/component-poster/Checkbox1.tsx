import { Button, ButtonProps, Checkbox, Spinner, Tooltip, buttonClassNames, makeStyles, shorthands, tokens } from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps} from '@fluentui/react-components';

// Checkbox


const useStyles = makeStyles({
     
})


export default function PosterApp() {

    const styles = useStyles();
    const [checked, setChecked] = useState<CheckboxProps['checked']>(true)
     
    return (
        <div >
            <Checkbox checked={checked} onChange={(ev,data)=>{
                setChecked(data.checked)
            }} label={"Checked"} /> 
        </div>
    )
}
