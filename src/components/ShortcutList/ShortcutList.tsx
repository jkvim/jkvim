import React from "react";

import './index.css'

interface Shortcut {
  key: string,
  description: string
}

interface ShortcutProps {
  title: string 
  groups: Array<{
    name: string,
    shortcuts: Array<Shortcut>
  }>
}

export default (props: ShortcutProps) => {
  return (
    <div className="shortcut-list">
      <div className="shortcut-list__title">{props.title}</div>
      <div className="shortcut-list__body">
        {props.groups.map((group) => (
          <div className="shortcut-list__group">
            <div className="shortcut-list__group-name">{group.name}</div>
            {group.shortcuts.map((shortcut) => (
              <div className="shortcut-list__shortcut">
                <div className="shortcut-list__shortcut__key">{shortcut.key}</div>
                <div className="shortcut-list__shortcut__description">{shortcut.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
