import lightModeIcon from '../assets/sun.png'
import darkModeIcon from '../assets/night-mode.png'


function Navbar({darkMode , toggleDarkMode}){
    return (
        <div>
            <img onClick={toggleDarkMode} className='w-8' src={darkModeIcon} alt="dark mode" />
            <img className='w-8' src={lightModeIcon} alt="light mode" />
        </div>
    )
}

export default Navbar ;