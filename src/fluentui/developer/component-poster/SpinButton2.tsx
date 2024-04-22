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

import { CalendarMonthFilled, CalendarMonthRegular, CheckmarkFilled } from '@fluentui/react-icons'
import React, { useState } from 'react';

import type { CheckboxProps, ComboboxProps, OptionProps, SelectProps, MenuProps } from '@fluentui/react-components';

import {
    CheckmarkCircle20Filled, bundleIcon, ClipboardPasteFilled, ClipboardPasteRegular,

    CutRegular, CutFilled, CopyRegular, CopyFilled
} from '@fluentui/react-icons'

// SpinButton Appearance




const useStyles = makeStyles({
    base: {
        display: "flex",
        flexDirection: "column",
        maxWidth: '500px',
        '> label': {
            marginBottom: tokens.spacingVerticalXXS,
        }
    },
    field: {
        display: 'grid',
        gridRowGap: tokens.spacingVerticalXXS,
        marginTop: tokens.spacingVerticalMNudge,
        ...shorthands.padding(tokens.spacingHorizontalMNudge)
    },
    filedLigher : {
        backgroundColor: tokens.colorNeutralBackgroundInverted,
        "> label": {
            color: tokens.colorNeutralForegroundInverted2,
        }
    },
    filledDarker:{
        backgroundColor: tokens.colorNeutralBackgroundInverted,
        "> label": {
            color: tokens.colorNeutralForegroundInverted2,
        }
    }
})

const PasteIcon = bundleIcon(ClipboardPasteFilled, ClipboardPasteRegular)
const CopyIcon = bundleIcon(CopyFilled, CopyRegular)
const CutIcon = bundleIcon(CutFilled, CutRegular)

export default function PosterApp(props: Partial<MenuProps>) {

    const styles = useStyles();
    const outlineId = useId('outline-id')
    const underlineId = useId('underline-id')
    const filledDarkerId = useId('filledDarker-id')
    const filledLighterId = useId('filledLighter-id')

    return (
        <div className={styles.base} >
            <div className={styles.field}>
                <Label htmlFor={outlineId} >Outline (default)</Label>
                <SpinButton  id={outlineId} appearance={'outline'} />
            </div>
            <div className={styles.field}>
                <Label htmlFor={underlineId} >Underline</Label>
                <SpinButton  id={underlineId} appearance={'underline'} />
            </div>
            <div className={mergeClasses(styles.field, styles.filledDarker)}>
                <Label htmlFor={filledDarkerId} >Filled Darker</Label>
                <SpinButton  id={filledDarkerId} appearance={'filled-darker'} />
            </div>
            <div className={mergeClasses(styles.field, styles.filedLigher)}>
                <Label htmlFor={filledLighterId} >Filled Lighter</Label>
                <SpinButton  id={filledLighterId} appearance={'filled-lighter'} />
            </div>
        </div>
    )
}
