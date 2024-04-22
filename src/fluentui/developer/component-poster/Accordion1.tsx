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
    mergeClasses
} from '@fluentui/react-components';
import {
    Menu, MenuTrigger, MenuList, MenuItem, MenuPopover, MenuItemLink
} from '@fluentui/react-components';

import {Accordion, AccordionHeader, AccordionItem, AccordionPanel} from '@fluentui/react-components';

import { CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps, ComboboxProps, OptionProps, SelectProps, MenuProps } from '@fluentui/react-components';

import {
    CheckmarkCircle20Filled, bundleIcon, ClipboardPasteFilled, ClipboardPasteRegular,

    CutRegular, CutFilled, CopyRegular, CopyFilled
} from '@fluentui/react-icons'

// Accordion

const useStyles = makeStyles({
    base: {
        display: "flex",
        flexDirection: "column",
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
    

    return (
         <Accordion>
            <AccordionItem value={"1"}>
                <AccordionHeader>Accordion Header 1</AccordionHeader>
                <AccordionPanel>
                    <div>Accordion Panel 1</div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value={"2"}>
                <AccordionHeader>Accordion Header 2</AccordionHeader>
                <AccordionPanel>
                    <div>Accordion Panel 2</div>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value={"3"}>
                <AccordionHeader>Accordion Header 3</AccordionHeader>
                <AccordionPanel>
                    <div>Accordion Panel 3</div>
                </AccordionPanel>
            </AccordionItem>
         </Accordion>
    )
}
