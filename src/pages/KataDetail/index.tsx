import React, { useState, useCallback } from "react";
import { Controlled } from "@jkvim/react-codemirror2";
import Layout from "../../layouts/Layout";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";

import './style.css'

export interface Step {
  description: string
  position: {
    line: number,
    ch: number
  }
}

export default (props) => {
  const [value, setValue] = useState("Hello World\nHello World\nHello World\nHello World\nHello World\nHello World\n");
  const [currentStep, setStep] = useState(0);
  const [isFinished, setFinished] = useState(false)
  const header = <NavBar />;
  const footer = <Footer />;


  const steps = [
    {
      description: "使用 `j` 将光标移动到第五行",
      position: {
        line: 4,
        ch: null
      }
    },
    {
      description: "使用 `k` 将光标移动到第三行",
      position: {
        line: 2,
        ch: null
      }
    },
    {
      description: "使用 `l` 将光标移动到 *d*",
      position: {
        line: null,
        ch: 10
      }
    },
    {
      description: "使用 `h` 将光标移动到 Hello 的 *o*",
      position: {
        line: null,
        ch: 4
      }
    },
  ]

  const isPositionMatch = (
    position: CodeMirror.Position
  ) => {
    const expectPosition = steps[currentStep].position
    console.log('expect', expectPosition, position);
    
    if (expectPosition.ch !== null && expectPosition.line !== null) {
      const { ch, line } = expectPosition;
      return ch === position.ch && line === position.line
    }
    if (expectPosition.ch !== null) {
      return expectPosition.ch === position.ch
    }
    if (expectPosition.line !== null) {
      return expectPosition.line === position.line;
    }
    return false
  }

  const handleCursorChange = (_, position: CodeMirror.Position) => {
    console.log(currentStep);
    if (isPositionMatch(position)) {
      const nextStep = (currentStep + 1) % steps.length;
      if (nextStep === 0) {
        setFinished(true)
        return
      }
      setStep(nextStep);
    }
  };
  
  const body = (
    <div className="kata-detail__body">
      <div className="kata-detail__step">挑战{`${currentStep+1}: ${steps[currentStep].description}`}</div>
      <Controlled
        value={value}
        options={{
          lineNumbers: true,
          mode: "text/x-csrc",
          keyMap: "vim",
          showCursorWhenSelecting: true,
          inputStyle: "contenteditable",
        }}
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        onCursor={handleCursorChange}
        editorDidMount={(editor) => {
          editor.setCursor(0, 0);
        }}
      />
     {isFinished && <div className="kata-dtail_finished">恭喜完成挑战!🎉</div>} 
    </div>
  );

  console.log('step', currentStep);

  return <Layout header={header} body={body} footer={footer} />;
};
