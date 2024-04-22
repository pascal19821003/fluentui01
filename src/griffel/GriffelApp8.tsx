import React from 'react'

// import { makeStyles, shorthands } from '@griffel/react';
import { makeStaticStyles, makeStyles, shorthands } from '@fluentui/react-components';
// import './style.css';

// makeStaticStyles, generate globale style.


const useStaticStyles = makeStaticStyles({
    body: {
        color: 'green',
        fontWeight:"bold",
        fontSize:'30px',
        padding: '15px',
    }
})
const useClasses = makeStyles({
    primaryText: {
        color: 'blue',
        ...shorthands.padding('5px'),
    },

});


export default function GriffelApp() {
    useStaticStyles();

    const clazz = useClasses();

    return (
        <div>
            <p>ddddd</p>
            <div className={clazz.primaryText}  >
                ccccbbb
            </div>
        </div>
    )
}
