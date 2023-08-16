

import './button.css'

const Button = () => {
    const user = true
    return <button className='btn '> {user ? 'Log Out ' : 'login'} </button>
}

export default Button

