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

import type { CheckboxProps, ComboboxProps, OptionProps, SelectProps, MenuProps, AccordionToggleEventHandler } from '@fluentui/react-components';

import {
    CheckmarkCircle20Filled, bundleIcon, ClipboardPasteFilled, ClipboardPasteRegular,

    CutRegular, CutFilled, CopyRegular, CopyFilled
} from '@fluentui/react-icons'

// Accordion Heading Levels


const useStyles = makeStyles({
    base: {
        display: "flex",
        flexDirection: "column",
        marginLeft:'10px',
        marginTop:'10px',
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
    const [openItems, setOpenItems] = useState(["1"])
    const handleToggle : AccordionToggleEventHandler<string>= (event, data)=>{
        console.log("data.openItems", data.openItems)
        setOpenItems(data.openItems)
    }

    return (
         <Accordion  navigation= {"linear"} className={styles.base}
         >
            <AccordionItem value={"1"}>
                <AccordionHeader as="h1">Accordion Header 1</AccordionHeader>
                <AccordionPanel>
                    <button>Accordion Panel 1</button>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value={"2"}>
                <AccordionHeader as="h1">Accordion Header 2</AccordionHeader>
                <AccordionPanel>
                    <button>Accordion Panel 2</button>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value={"3"}>
                <AccordionHeader as="h1">Accordion Header 3</AccordionHeader>
                <AccordionPanel>
                    <button>Accordion Panel 3</button>
                </AccordionPanel>
            </AccordionItem>
         </Accordion>
    )
}
