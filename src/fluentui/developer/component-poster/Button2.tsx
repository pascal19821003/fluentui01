import { Button, ButtonProps, Tooltip, makeStyles } from '@fluentui/react-components';
import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular } from '@fluentui/react-icons'
import React from 'react'

// Button disabled disabledFocusable

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
    innerWrapper: {
        columnGap: '15px',
        display: 'flex',
    },
    outterWrapper: {
        columnGap: '15px',
        display: 'flex',
        flexDirection: "column"
    },
})


export default function PosterApp() {

    const styles = useStyles();

    return (
        <div className={styles.outterWrapper}>
            <div className={styles.innerWrapper}>
                <Button>Enable state</Button>
                <Button disabled>Disable state</Button>
                <Button disabledFocusable>Disabled focusable state</Button>
            </div>

            <div className={styles.innerWrapper}>
                <Button appearance={"primary"}>Enable state</Button>
                <Button disabled appearance={"primary"}>Disable state</Button>
                <Button disabledFocusable appearance={"primary"}>Disabled focusable state</Button>
            </div>
        </div>
    )
}
