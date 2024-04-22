import { Button, ButtonProps, Spinner, Tooltip, buttonClassNames, makeStyles, shorthands, tokens } from '@fluentui/react-components';

import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react'

// Button Loading

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
    wrapper: {
        columnGap: '15px',
        display: 'flex',
    },
    buttonNonIteractive: {
        backgroundColor: tokens.colorNeutralBackground1,
        ...shorthands.border(
            tokens.strokeWidthThin,
            'solid',
            tokens.colorNeutralForeground1,

        )
        ,
        color: tokens.colorNeutralForeground1,
        cursor:'default',
        pointerEvents:"none",
        [`& .${buttonClassNames.icon}`]:{
            color: tokens.colorStatusSuccessForeground1,
        }
    },
})

type loadingState = "initial" | "loading" | "loaded";

export default function PosterApp() {

    const styles = useStyles();

    const [loadingState, setLoadingState] = useState<loadingState>("initial");

    const buttonContent = loadingState === 'loading' ? 'Loading' : loadingState === 'loaded' ? "Loaded" : "Start loading";

    const buttonIcon = loadingState === 'loading' ? (<Spinner size="tiny" />) :
        loadingState === "loaded" ? (<CheckmarkFilled />) : null;

    let timeout: any = null;

    const buttonClassName  = loadingState === "initial" ?undefined: styles.buttonNonIteractive;

    const handleLoad = () => {
        setLoadingState("loading")
        timeout = setTimeout(() => setLoadingState("loaded"), 5000)
    }

    const handleReset = () => {
        if (timeout !== null)
            clearTimeout(timeout)
        setLoadingState('initial')
    }

    return (
        <div className={styles.wrapper}>
            <Button style={{ width: 200 }}
                onClick={handleLoad}
                disabledFocusable={loadingState !== "initial"}
                className={buttonClassName}
                icon={buttonIcon}
            >{buttonContent}</Button>
            <Button style={{ width: 200 }} onClick={handleReset}>Reset loading state</Button>
        </div>
    )
}
