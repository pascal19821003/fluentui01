import React, { Children, ReactElement, ReactNode, useMemo } from 'react';
import './App.css';
import { FluentProvider, RendererProvider, createDOMRenderer, makeStyles, webLightTheme, shorthands, Button } from '@fluentui/react-components';
import Frame, { FrameContextConsumer } from "react-frame-component";


const useClasses = makeStyles({
  root: {
    ...shorthands.padding('10px')
  }
});

function MyComponent({ targetDocument, children }: { targetDocument: HTMLDocument | undefined, children: ReactNode }) {

  console.log("document", document)

  const render = useMemo(() => createDOMRenderer(targetDocument), [targetDocument])
  return (
    <RendererProvider renderer={render} targetDocument={targetDocument}>
      <FluentProvider targetDocument={targetDocument} theme={webLightTheme}>
        <div className="App">
          {children}
        </div>
      </FluentProvider>
    </RendererProvider>

  )
}

function MyContent() {
  const classess = useClasses();

  return (
    <div className={classess.root}>
      <p>This content is rendered inside an iframe!</p>
      <Button>A Button</Button>
    </div>
  )
}


function AppWithFrame() {
  return (
    <Frame style={{ border: "4px dotted green", height: "400px", width: "400px" }}
    >
      <FrameContextConsumer>
        {({ document }) => {
          return (
            <MyComponent targetDocument={document}>
              <MyContent />
            </MyComponent>)
        }}
      </FrameContextConsumer>
    </Frame>

  );
}

export default AppWithFrame;
