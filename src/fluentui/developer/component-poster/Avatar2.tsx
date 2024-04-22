import {
    Button, ButtonProps, Checkbox, Dropdown,
    Spinner, Tooltip, buttonClassNames, makeStyles,
    shorthands, tokens, Option, useId,
    OptionGroup,
    Persona,
    Combobox,
    OptionGroupProps,
    Select,
    MenuItemCheckbox,
    SpinButton,
    Label,
    mergeClasses, Link, Avatar
} from '@fluentui/react-components';
import {
    Menu, MenuTrigger, MenuList, MenuItem, MenuPopover, MenuItemLink
} from '@fluentui/react-components';

import { Accordion, AccordionHeader, AccordionItem, AccordionPanel } from '@fluentui/react-components';

import { CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps, ComboboxProps, OptionProps, SelectProps, MenuProps, AccordionToggleEventHandler } from '@fluentui/react-components';

import {
    CheckmarkCircle20Filled, bundleIcon, ClipboardPasteFilled, ClipboardPasteRegular,

    CutRegular, CutFilled, CopyRegular, CopyFilled,
    Add20Filled, Subtract20Filled, RocketRegular
} from '@fluentui/react-icons'

//  Avatar badge


const useStyles = makeStyles({
    base: {
        display: "flex",
        flexDirection: "column",
        marginLeft: '10px',
        marginTop: '10px',
        maxWidth: '500px',
        '> label': {
            marginBottom: tokens.spacingVerticalXXS,
        }
    }
})

const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular)
const CopyIcon = bundleIcon(CopyFilled, CopyRegular)
const CutIcon = bundleIcon(CutFilled, CutRegular)

export default function PosterApp(props: Partial<MenuProps>) {

    const styles = useStyles();

    const [openItem, setOpenItem] = useState(0)

    const handleToggle: AccordionToggleEventHandler<number> = (event, data) => {
        setOpenItem(data.value)
    }

    return (
        <>
            <Avatar badge={{ status: "available" }} name={"Ashley McCarthy"} />available
            <Avatar badge={{ status: "busy" }} name={"Ashley McCarthy"} />busy
            <Avatar badge={{ status: "out-of-office" }} name={"Ashley McCarthy"} />out-of-office
            <Avatar badge={{ status: "away" }} name={"Ashley McCarthy"} />away
            <Avatar badge={{ status: "offline" }} name={"Ashley McCarthy"} />offline
            <br />

            <Avatar badge={{ status: "do-not-disturb" }} name={"Ashley McCarthy"} />do-not-disturb
            <Avatar badge={{ status: "blocked" }} name={"Ashley McCarthy"} />blocked
            <Avatar badge={{ status: "available", outOfOffice: true }} name={"Ashley McCarthy"} />available outOfOffice
            <Avatar badge={{ status: "busy", outOfOffice: true }} name={"Ashley McCarthy"} />busy outOfOffice
            <Avatar badge={{ status: "out-of-office", outOfOffice: true }} name={"Ashley McCarthy"} />out-of-office outOfOffice
            <br />
            <Avatar badge={{ status: "away", outOfOffice: true }} name={"Ashley McCarthy"} /> away outOfOffice
            <Avatar badge={{ status: "offline", outOfOffice: true }} name={"Ashley McCarthy"} />offline outOfOffice
            <Avatar badge={{ status: "do-not-disturb", outOfOffice: true }} name={"Ashley McCarthy"} /> do-not-disturb outOfOffice
            <Avatar badge={{ status: "blocked", outOfOffice: true }} name={"Ashley McCarthy"} />blocked  outOfOffice
            <br />
        </>

    )
}
