import {
    Button, ButtonProps, Checkbox, Dropdown,
    Spinner, Tooltip, buttonClassNames, makeStyles,
    shorthands, tokens, Option, useId,
    OptionGroup,
    Persona,
    Combobox,
    OptionGroupProps,
    Select,
} from '@fluentui/react-components';
import {
    Menu, MenuTrigger, MenuList, MenuItem, MenuPopover
} from '@fluentui/react-components';

import { CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps, ComboboxProps, OptionProps, SelectProps, MenuProps } from '@fluentui/react-components';

import {
    CheckmarkCircle20Filled, bundleIcon, ClipboardPasteFilled, ClipboardPasteRegular,

    CutRegular, CutFilled, CopyRegular, CopyFilled
} from '@fluentui/react-icons'

// Menu Interaction  



const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyContent: "start",
        ...shorthands.gap('2px'),
        maxWidth: '400px',
    },
    listbox: {
        maxWidth: '200px',
    }
})

const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular)
const CopyIcon = bundleIcon(CopyFilled, CopyRegular)
const CutIcon = bundleIcon(CutFilled, CutRegular)

export default function PosterApp(props: Partial<MenuProps>) {

    const styles = useStyles();
    const selectId = useId('select-default')

    return (
        <Menu {...props}>
            <MenuTrigger disableButtonEnhancement>
                <Button>Edit content</Button>
            </MenuTrigger>

            <MenuPopover>
                <MenuList>
                    <MenuItem icon={<CutIcon />} onClick={() => { alert("Cut to clipboard") }}>Cut</MenuItem>

                    <MenuItem icon={<CopyIcon />} onClick={() => { alert("Copy to clipboard") }}>Copy</MenuItem>

                    <MenuItem icon={<PasteIcon />} onClick={() => { alert("Paste to clipboard") }}>Paste</MenuItem>
                </MenuList>
            </MenuPopover>
        </Menu>
    )
}
