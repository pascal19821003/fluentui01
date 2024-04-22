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

//  Avatar  Color: named color



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
            <Avatar initials="DR" color="dark-red" name="darkRed avatar" />
            <Avatar initials="CR" color="cranberry" name="cranberry avatar" />
            <Avatar initials="RE" color="red" name="red avatar" />
            <Avatar initials="PU" color="pumpkin" name="pumpkin avatar" />
            <Avatar initials="PE" color="peach" name="peach avatar" />
            <Avatar initials="MA" color="marigold" name="marigold avatar" />
            <Avatar initials="GO" color="gold" name="gold avatar" />
            <Avatar initials="BS" color="brass" name="brass avatar" />
            <Avatar initials="BR" color="brown" name="brown avatar" />
            <Avatar initials="FO" color="forest" name="forest avatar" />
            <Avatar initials="SE" color="seafoam" name="seafoam avatar" />
            <Avatar initials="DG" color="dark-green" name="darkGreen avatar" />
            <Avatar initials="LT" color="light-teal" name="lightTeal avatar" />
            <Avatar initials="TE" color="teal" name="teal avatar" />
            <Avatar initials="ST" color="steel" name="steel avatar" />
            <Avatar initials="BL" color="blue" name="blue avatar" />
            <Avatar initials="RB" color="royal-blue" name="royalBlue avatar" />
            <Avatar initials="CO" color="cornflower" name="cornflower avatar" />
            <Avatar initials="NA" color="navy" name="navy avatar" />
            <Avatar initials="LA" color="lavender" name="lavender avatar" />
            <Avatar initials="PU" color="purple" name="purple avatar" />
            <Avatar initials="GR" color="grape" name="grape avatar" />
            <Avatar initials="LI" color="lilac" name="lilac avatar" />
            <Avatar initials="PI" color="pink" name="pink avatar" />
            <Avatar initials="MA" color="magenta" name="magenta avatar" />
            <Avatar initials="PL" color="plum" name="plum avatar" />
            <Avatar initials="BE" color="beige" name="beige avatar" />
            <Avatar initials="MI" color="mink" name="mink avatar" />
            <Avatar initials="PL" color="platinum" name="platinum avatar" />
            <Avatar initials="AN" color="anchor" name="anchor avatar" />

        </>

    )
}
