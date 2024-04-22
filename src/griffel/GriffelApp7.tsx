import React from 'react'

// import { makeStyles, shorthands } from '@griffel/react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import './style.css';

// @keyframes (animations)



const useClasses = makeStyles({
    root: {
        width: '100px',
        height: '50px',
        backgroundColor: 'blue',

        animationIterationCount: 'infinite',
        animationDuration: '3s',
        animationName: {
            from: { backgroundColor: 'blue' },
            to: { backgroundColor: 'yellow' }
        }
    },

});


export default function GriffelApp() {
    const clazz = useClasses();
    return (
        <div className={clazz.root}  >
            ccccbbb
        </div>
    )
}
