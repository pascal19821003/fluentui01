import { Button, ButtonProps, Tooltip, makeStyles } from '@fluentui/react-components';
import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular } from '@fluentui/react-icons'
import React from 'react'

// Button
const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
    wrapper: {
        marginTop: '20px',
        columnGap: '15px',
        display: 'flex',
    }
})
function MyButton(props: ButtonProps) {
    return <Button {...props}>Example</Button>
}
export default function PosterApp() {

    const styles = useStyles();

    return (
        <div>


            <div className={styles.wrapper}>
                <MyButton appearance={'secondary'} size={"medium"} shape={"circular"} />

                <Button icon={<CalendarMonthRegular />} >Click me</Button>

                <Button icon={<CalendarMonth />} appearance='outline' >outline</Button>

                <Button icon={<CalendarMonth />} appearance={'subtle'} >subtle</Button>

                <Button icon={<CalendarMonth />} appearance={'transparent'} >transparent</Button>
            </div>
            <div className={styles.wrapper}>
                <Button icon={<CalendarMonthRegular />}>With calendar icon before contents</Button>
                <Button icon={<CalendarMonthRegular />} iconPosition={'after'}>With calendar icon before contents</Button>
                <Tooltip content={"With calendar icon only"} relationship='label'>
                    <Button icon={<CalendarMonthRegular />} />
                </Tooltip>

            </div>
            <div className={styles.wrapper}>
                <Button icon={<CalendarMonthRegular />}>With calendar icon before contents</Button>
            </div>
        </div>
    )
}
