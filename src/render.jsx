import { StrictMode } from 'react' // Help highlight problems
import { createRoot } from 'react-dom/client'
import App from './app/app.jsx'

let htmlRootContainer = document.getElementById('root')

// Create a React root to render React components
createRoot(htmlRootContainer)
.render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
