import React, { useState, useCallback } from "react";
import { Controlled } from "@jkvim/react-codemirror2";

import './index.css'

export default (props) => {
  const [value, setValue] = useState("Hello World\nHello World\nHello World\nHello World\nHello World\nHello World\n");
  const [currentStep, setStep] = useState(0);
  const [isFinished, setFinished] = useState(false)

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
  
  return (
    <div className="kata-board">
      <div className="kata-board__step">挑战{`${currentStep+1}: ${steps[currentStep].description}`}</div>
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
     {isFinished && <div className="kata-board_finished">恭喜完成挑战!🎉</div>} 
    </div>
  );

};