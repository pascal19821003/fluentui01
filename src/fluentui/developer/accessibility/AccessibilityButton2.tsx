import {
    Button, Dropdown, Tab, TabList, makeStyles, shorthands, useId, Option, Menu,
    MenuTrigger,
    MenuList,
    MenuItem,
    MenuPopover,
} from '@fluentui/react-components'
import React from 'react'


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyContent: "start",
        ...shorthands.gap('2px'),
        maxWidth: '400px',
    }
})

export default function AccessibilityApp() {
    const styles = useStyles();
    const dropdownId = useId("dropdown-default");

    const options = [
        "Cat",
        "Caterpillar",
        "Corgi",

    ]

    return (
        <div className={styles.root}>
            <button>dddd</button>
            <div>

                <p tabIndex={0}>
                    With this option, notifications won't be displayed anymore . You can miss information about latest news.
                </p>
                <Button>Submit</Button>
            </div>

            <div>

                <p id="notificationText">
                    With this option, notifications won't be displayed anymore . You can miss information about latest news. -----
                </p>
                <Button aria-describedby='notificationText'>Submit---</Button>

            </div>

            <div>

                <div id="testTitle">Summary of your code</div>
                <div role={"group"} aria-labelledby='testTitle'>
                    <Button  >Buy</Button>
                </div>

            </div>

        </div>
    )

}
