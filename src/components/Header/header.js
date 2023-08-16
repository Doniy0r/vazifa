import './header.css'

const Header = () => {

    const getText = (text) => {
        return (
            <div>
                <h2> Hello {text}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos enim eum magni neque sed
                    temporibus.</p>
            </div>
        )
    }

    return <div>{getText('Abdusattor')}</div>

}


export default Header