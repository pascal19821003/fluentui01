import React from 'react'

// import { makeStyles, shorthands } from '@griffel/react';
import { makeStyles, shorthands } from '@fluentui/react-components';
// import './style.css';

// At-rules




const useClasses = makeStyles({
    root: {
        '@media screen and (max-width: 992px)': { color: "orange" },
    },

});


export default function GriffelApp() {
    const clazz = useClasses();
    return (
        <p className={clazz.root}  >
            cccc
        </p>
    )
}
