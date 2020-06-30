import React from "react";

import './index.css'

export interface Shortcut {
  key: string,
  description: string
}

export interface ShortcutGroup {
  name: string;
  shortcuts: Array<Shortcut>;
}

export interface ShortcutProps {
  index: number;
  title: string;
  groups: Array<ShortcutGroup>;
  bottomTips?: string;
}

export default (props: ShortcutProps) => {
  const colors = ["#FB7D44", "#2A92BF", "#F4CE46", "#00B961"]
  return (
    <div className="shortcut-list">
      <div
        className="shortcut-list__title"
        style={{ backgroundColor: colors[props.index % 4] }}
      >
        {props.title}
      </div>
      <div className="shortcut-list__body">
        {props.groups.map((group, index) => (
          <div className="shortcut-list__group" key={`shortcut-group_${index}`}>
            <div className="shortcut-list__group-name">{group.name}</div>
            {group.shortcuts.map((shortcut) => (
              <div className="shortcut-list__shortcut" key={shortcut.key}>
                <div className="shortcut-list__shortcut__key">
                  {shortcut.key}
                </div>
                <div className="shortcut-list__shortcut__description">
                  {shortcut.description}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="shortcut-list__footer">{props.bottomTips}</div>
    </div>
  );
};
