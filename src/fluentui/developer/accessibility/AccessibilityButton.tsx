import { Button, useId } from '@fluentui/react-components'
import React from 'react'

export default function AccessibilityApp() {

    const userLabelId = useId("user-label");
    return (
        <div>
            <label id={"userLabelId"}>Robert Tolbert</label>
            <Button aria-labelledby={"removeButtonId userLabelId"} id="removeButtonId">Remove</Button>
            {/* <Button aria-label="Remove Robert Tolbert1111" >Remove</Button> */}

            <Button aria-label="Mute microphone">Mute</Button>
        </div>
    )
}
