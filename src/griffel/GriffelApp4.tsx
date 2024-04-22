import React from 'react'

// import { makeStyles, shorthands } from '@griffel/react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import './style.css';

// Pseudo-elements


const useClasses = makeStyles({
    root: {
        marginLeft: '50px',
        marginTop: '50px',
        ...shorthands.border('1px', 'solid', 'green'),
        position: 'relative',

        '::after': {
            content: '"vvvv"',
            display: 'block',
            position: 'absolute',
            top: '50px',
            left: '50px',
            color: "red",
        }
    }
});


export default function GriffelApp() {
    const clazz = useClasses();
    return (
        <div className={clazz.root} >
            cccc
        </div>
    )
}
