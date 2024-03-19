import Nav from './Nav';
import logo from '../assets/logo.svg';

function Header(){
    return(
        <>
            <header className='header'>
                <div className='header__container'>
                    <div className='container__left'>
                        <a href="/" className='logo'>
                            <img src={logo} alt="logo crypto" className='logo__img' />
                            <p className='logo__text'>CryptoMex</p>
                        </a>
                        <Nav/>
                    </div>
                    <div className='container__right'>
                        <a href="#" className='boton'>Wallet</a>
                    </div>
                </div>
                
            </header>
        </>
    )
}

export default Header