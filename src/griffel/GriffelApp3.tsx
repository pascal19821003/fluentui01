import React from 'react'

import { makeStyles } from '@griffel/react';


// Pseudo-classes


const useClasses = makeStyles({
    root: {
        ':active': { color: 'pink' },
        ':hover': { color: "blue" },
        ':nth-child(2n)': { backgroundColor: '#fafafa' },
    }
});


export default function GriffelApp() {
    const clazz = useClasses();
    return (
        <div >
            <ol >
                <li className={clazz.root}>bb</li>
                <li className={clazz.root}>cc</li>
                <li className={clazz.root}>dd</li>
                <li className={clazz.root} >eee</li>
            </ol>


        </div>
    )
}
