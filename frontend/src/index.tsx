
import React from 'react'
import ReactDOM from 'react-dom';

import { App } from './App'

//@ts-ignore
const root = ReactDOM.createRoot (
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)