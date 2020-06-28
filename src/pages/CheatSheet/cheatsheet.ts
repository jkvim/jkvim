import { ShortcutProps } from "/@/components/ShortcutList/index";

type ShortcutList = Array<
  Pick<ShortcutProps, "groups" | "title" | "bottomTips">
>;

const generalShortcut: ShortcutList = [
  {
    title: "Exiting",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: ":qa",
            description: "Close all files",
          },
          {
            key: ":qa!",
            description: "Close all files, abandon changes",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: ":w",
            description: "Save",
          },
          {
            key: ":wq / :x",
            description: "Save and close file",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: ":q",
            description: "Close file",
          },
          {
            key: ":q!",
            description: "Close file, abandon changes",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "ZZ",
            description: "Save and quit",
          },
          {
            key: "ZQ",
            description: "Quit without checking changes",
          },
        ],
      },
    ],
  },
  {
    title: "Navigating",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "h j k l",
            description: "Arrow keys",
          },
          {
            key: "<C-U> / <C-D>",
            description: "Page up/page down",
          },
        ],
      },
      {
        name: "Words",
        shortcuts: [
          {
            key: "b / w",
            description: "Previous/next word",
          },
          {
            key: "ge / e",
            description: "Previous/next end of word",
          },
        ],
      },
      {
        name: "Line",
        shortcuts: [
          {
            key: "0 (zero)",
            description: "Start of line",
          },
          {
            key: "^",
            description: "Start of line (after whitespace)",
          },
          {
            key: "$",
            description: "End of line",
          },
        ],
      },
      {
        name: "Character",
        shortcuts: [
          {
            key: "fc",
            description: "Go forward to character c",
          },
          {
            key: "Fc",
            description: "Go backward to character c",
          },
        ],
      },
      {
        name: "Document",
        shortcuts: [
          {
            key: "gg",
            description: "First line",
          },
          {
            key: "G",
            description: "Last line",
          },
          {
            key: ":n",
            description: "Go to line n",
          },
          {
            key: "nG",
            description: "Go to line n",
          },
        ],
      },
      {
        name: "Window",
        shortcuts: [
          {
            key: "zz",
            description: "Center this line",
          },
          {
            key: "zt",
            description: "Top this line",
          },
          {
            key: "H",
            description: "Move to top of screen",
          },
          {
            key: "M",
            description: "Move to middle of screen",
          },
          {
            key: "L",
            description: "Move to bottom of screen",
          },
        ],
      },
      {
        name: "Tab pages",
        shortcuts: [
          {
            key: ":tabedit [file]",
            description: "Edit file in a new tab",
          },
          {
            key: ":tabfind [file]",
            description: "Open file if exists in new tab",
          },
          {
            key: ":tabclose",
            description: "Close current tab",
          },
          {
            key: ":tabs",
            description: "List all tabs",
          },
          {
            key: ":tabfirst",
            description: "Go to first tab",
          },
          {
            key: ":tablast",
            description: "Go to last tab",
          },
          {
            key: ":tabn",
            description: "Go to next tab",
          },
          {
            key: ":tabp",
            description: "Go to previous tab",
          },
        ],
      },
    ],
  },
  {
    title: "Editing",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "a",
            description: "Append",
          },
          {
            key: "A",
            description: "Append from end of line",
          },
          {
            key: "i",
            description: "insert",
          },
          {
            key: "o",
            description: "Next line",
          },
          {
            key: "O",
            description: "Previous line",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "s",
            description: "Delete char and insert",
          },
          {
            key: "S",
            description: "Delete line and insert",
          },
          {
            key: "C",
            description: "Delete line and insert",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "r",
            description: "Replace one character",
          },
          {
            key: "R",
            description: "Enter Replace mode",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "u",
            description: "Undo changes",
          },
          {
            key: "<C-R>",
            description: "Redo changes",
          },
        ],
      },
    ],
  },
  {
    title: "Exiting insert mode",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "Esc / <C-[>",
            description: "Exit insert mode",
          },
          {
            key: "<C-C>",
            description: "Exit insert mode, and abort current command",
          },
        ],
      },
    ],
  },
  {
    title: "Visual mode",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "v",
            description: "Enter visual mode",
          },
          {
            key: "V",
            description: "Enter visual line mode",
          },
        ],
      },
      {
        name: "In visual mode",
        shortcuts: [
          {
            key: "d / x",
            description: "Delete selection",
          },
          {
            key: "s",
            description: "Replace selection",
          },
          {
            key: "y",
            description: "Yank selection(Copy)",
          },
        ],
      },
    ],
  },
  {
    title: "Clipboard",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "x",
            description: "Delete character",
          },
          {
            key: "dd",
            description: "Delete line(Cut)",
          },
          {
            key: "yy",
            description: "Yank line (Copy)",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "p",
            description: "Paste",
          },
          {
            key: "P",
            description: "Paste before",
          },
          {
            key: '"*p / "+p',
            description: "Paste from system clipboard",
          },
          {
            key: '"*y / "+y',
            description: "Paste to system clipboard",
          },
        ],
      },
    ],
  },
];

const operators = [
  {
    title: "Operators list",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "d",
            description: "Delete",
          },
          {
            key: "y",
            description: "Yank(copy)",
          },
          {
            key: "c",
            description: "Change(delete then insert)",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: ">",
            description: "Indent right",
          },
          {
            key: "<",
            description: "Indent left",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "g~",
            description: "Swap case",
          },
          {
            key: "gU",
            description: "Uppercase",
          },
          {
            key: "gu",
            description: "Lowercase",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "!",
            description: "Filter through external program",
          },
        ],
      },
    ],
    bottomTips: "See :help operator",
  },
  {
    title: "Operators list",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "dd",
            description: "Delete current line",
          },
          {
            key: "dw",
            description: "Delete to next word",
          },
          {
            key: "db",
            description: "Delete to beginning of word",
          },
          {
            key: "2dd",
            description: "Delete 2 lines",
          },
          {
            key: "dip",
            description: "Delete a text object(inside paragraph)",
          },
        ],
      },
    ],
    bottomTips: "Combine operators with motions to use them.",
  },
];

const textObjects: ShortcutList = [
  {
    title: "Text objects",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "p",
            description: "Paragraph",
          },
          {
            key: "w",
            description: "Word",
          },
          {
            key: "s",
            description: "Sentence",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "[ ( { <",
            description: "A[], (), or {} block",
          },
          {
            key: "' \" `",
            description: "A quoted string",
          },
        ],
      },
    ],
  },
  {
    title: "Example",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: 'vi"',
            description: "Select inside quote",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: 'yi"',
            description: "Yank inner quote",
          },
          {
            key: 'ya"',
            description: "Yank quote (including quote)",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: 'di"',
            description: "delete inner quote",
          },
          {
            key: 'ci"',
            description: "change inner quote",
          },
        ],
      },
    ],
  },
];

const misc: ShortcutList = [
  {
    title: "Folds",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "zo / zO",
            description: "Open",
          },
          {
            key: "zc / zC",
            description: "Close",
          },
          {
            key: "za / zA",
            description: "Append",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "zv",
            description: "Open folds for this line",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "zM",
            description: "Close all",
          },
          {
            key: "zR",
            description: "Open all",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "zm",
            description: "Fold more(foldlevel += 1)",
          },
          {
            key: "zr",
            description: "Fold less(foldlevel -= 1)",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "zx",
            description: "Update folds",
          },
        ],
      },
    ],
  },
  {
    title: "Navigation",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "[( [{ [<",
            description: "Previous ( or { or <",
          },
          {
            key: "])",
            description: "Next",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "[m",
            description: "Previous method start",
          },
          {
            key: "[M",
            description: "Previous method end",
          },
        ],
      },
    ],
  },
  {
    title: "Jumping",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "<C - O>",
            description: "Go back to previous location",
          },
          {
            key: "<C-I>",
            description: "Go forward",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "gf",
            description: "Go to file in cursor",
          },
        ],
      },
    ],
  },
  {
    title: "Windows",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "z{height}<Cr>",
            description: "Resize pane to {height} lines tall",
          },
        ],
      },
    ],
  },
  {
    title: "Counters",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "<C-A>",
            description: "Increment number",
          },
          {
            key: "<C-X>",
            description: "Decrement",
          },
        ],
      },
    ],
  },
  {
    title: "Case",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "~",
            description: "Toggle case (Case => cASE)",
          },
          {
            key: "gU",
            description: "Uppercase",
          },
          {
            key: "gu",
            description: "Lowercase",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "gUU",
            description: "Uppercase current line (also gUgU)",
          },
          {
            key: "guu",
            description: "Lowercase current line (also gugu)",
          },
        ],
      },
    ],
  },
  {
    title: "Tags",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: ":tag Classname",
            description: "Jump to first definition of Classname",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "<C - ]>",
            description: "Jump to definition",
          },
          {
            key: "g]",
            description: "See all definitions",
          },
          {
            key: "<C - T>",
            description: "Go back to latest tag",
          },
          {
            key: "<C - O> <C - I>",
            description: "Back/Forward",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: ":tselect Classname",
            description: "Find definitions of Classname",
          },
          {
            key: ":tjump Classname",
            description: "Find definitions of Classname",
          },
        ],
      },
    ],
  },
  {
    title: "Marks",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "`^",
            description: "Last position of cursor in insert mode",
          },
          {
            key: "`.",
            description: "Last change",
          },
          {
            key: "``",
            description: "Last jump",
          },
        ],
      },
      {
        name: "",
        shortcuts: [
          {
            key: "ma",
            description: "Mark this cursor position as a",
          },
          {
            key: "`a",
            description: "Jump to the cursor position a",
          },
          {
            key: "'a",
            description: "Jump to the beginning of the line with position a",
          },
        ],
      },
    ],
  },
  {
    title: "Misc",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: ".",
            description: "Repeat last command",
          },
          {
            key: "]p",
            description: "Paste under the current indentation level",
          },
          {
            key: ":ff=unix",
            description: "Convert Windows line endings to Unix line endings",
          },
        ],
      },
    ],
  },
  {
    title: "Command line",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "<C-R><C-W>",
            description: "Insert current word into the command line",
          },
          {
            key: '<C-R>"',
            description: "Paste from “ register",
          },
          {
            key: "<C-X><C-F>",
            description: "Auto-completion of path in insert mode",
          },
        ],
      },
    ],
  },
  {
    title: "Calculator",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "<C-R>=128/2",
            description: "Shows the result of the division : ‘64’",
          },
        ],
      },
    ],
  },
  {
    title: "Spell Checking",
    groups: [
      {
        name: "",
        shortcuts: [
          {
            key: "set spell spellang=en_us",
            description: "Turn on US English spell checking",
          },
          {
            key: "]s",
            description: "Move to next misspelled word after the cursor",
          },
          {
            key: "[s",
            description: "Move to previous misspelled word before the cursor",
          },
          {
            key: "=z",
            description:
              "Suggest spellings for the word under/after the cursor",
          },
          {
            key: "zg",
            description: "Add word to spell list",
          },
          {
            key: "zw",
            description: "Mark word as bad/mispelling",
          },
          {
            key: "zu / C-X(Insert Mode)",
            description: "Suggest words for bad word under cursor from spellfile",
          },
        ],
      },
    ],
    bottomTips: "See :help spell"
  },
];

export { generalShortcut, operators, textObjects, misc };
