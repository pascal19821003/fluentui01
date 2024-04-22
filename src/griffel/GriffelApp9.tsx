import React from 'react'

// import { makeStyles, shorthands } from '@griffel/react';
import { makeResetStyles, makeStaticStyles, makeStyles, mergeClasses, shorthands } from '@fluentui/react-components';
// import './style.css';

// makeResetStyles


const useBaseClass = makeResetStyles({
    color: 'green',
    fontWeight: "bold",
    fontSize: '30px',
    padding: '15px',
})
const useClasses = makeStyles({
    primaryText: {
        color: 'blue',
    },
    circular: {
        ...shorthands.padding('5px'),
        ...shorthands.borderRadius('5px'),
    }

});


function Component({ primary, circular }: { primary: boolean, circular: boolean }) {

    const baseClass = useBaseClass();

    const clazz = useClasses();

    return (
        <button className={
            mergeClasses(baseClass, primary && clazz.primaryText, circular && clazz.circular)
        }>click me..</button>
    )

}

export default function GriffelApp() {


    return (
        <div>
            <Component primary={true} circular={true}></Component>
        </div>
    )
}
