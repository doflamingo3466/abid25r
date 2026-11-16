# Counter Studio

A beginner-friendly React counter project.

## Run it

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Folder layout

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Counter.jsx
│   └── Settings.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## What to explain

- `useState` stores the counter and the two settings.
- The functions in `App.jsx` update those state values.
- `Counter` receives the number and button functions as props.
- `Settings` receives the setting values and toggle functions as props.
- `showInfo && (...)` shows the note only when `showInfo` is true.
- `darkMode` changes the class on the main element.
- `decreaseCount` checks the number before subtracting, so it cannot go below zero.
