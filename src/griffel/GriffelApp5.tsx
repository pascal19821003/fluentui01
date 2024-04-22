import React from 'react'

// import { makeStyles, shorthands } from '@griffel/react';
import { makeStyles, shorthands } from '@fluentui/react-components';
// import './style.css';

// :global() selector



const useClasses = makeStyles({
    root: {
        ':global(div[data-whatintent="mouse"])': { backgroundColor: 'green' },
    },

});


export default function GriffelApp() {
    const clazz = useClasses();
    return (
        // <div className={clazz.root} data-whatintent="mouse" >
        //     cccc
        // </div>
        <div data-whatintent="mouse" >
            <p className={clazz.root}  >
                cccc
            </p>
        </div>

    )
}
