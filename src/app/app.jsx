import Navbar   from "../navbar/navbar"
import Home     from "../home/home"
import About    from "../about/about"
import './app.css'


export default 
function App() { return (
<div id="app">
    <Navbar/>
    <Home/>
    <About/>
</div>
)}