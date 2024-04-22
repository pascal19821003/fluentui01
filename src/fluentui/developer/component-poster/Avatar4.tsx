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
    Add20Filled, Subtract20Filled, RocketRegular, 
    GuestRegular
} from '@fluentui/react-icons'

//  Avatar  colorful


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
            <Avatar color="colorful" name="Katri Athokas" />
            <Avatar color="colorful" name="Elvia Atkins" />
            <Avatar color="colorful" name="Cameron Evans" />
            <Avatar color="colorful" name="Wanda Howard" />
            <Avatar color="colorful" name="Mona Kane" />
            <Avatar color="colorful" name="Allan Munger" />
            <Avatar color="colorful" name="Daisy Phillips" />
            <Avatar color="colorful" name="Robert Tolbert" />
            <Avatar color="colorful" name="Kevin Sturgis" />
            <Avatar color="colorful" name="Elliot Woodward" />

            <br/>
            <br/>
            <br/>
            <Avatar color="colorful" idForColor='id-123' icon={<GuestRegular />} aria-label="Guest" />
            <Avatar color="colorful" idForColor='dsfds' icon={<GuestRegular />} aria-label="Guest" />
            <Avatar color="colorful" idForColor='Guest-23' icon={<GuestRegular />} aria-label="Guest" />
            <Avatar color="colorful" idForColor='42' icon={<GuestRegular />} aria-label="Guest" />

            
        </>

    )
}
