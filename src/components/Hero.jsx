import figure from '../assets/blockchain.webp';
function Hero(){
    return(
        <>
        <div className="hero">
            <div className="hero__text">
                <h1>Rastrea y Compara Criptomonedas en CryptoMex </h1>
                <p>Visualiza las tendencias en Criptomonedas de manera segura, rápida y en todo momento. Te mostramos los mercados mas importantes y noticas a través de correo eléctronico.</p>
                <a href="#" className='btn-primary'>Quote and Track Price</a>
            </div>
            <figure className="hero_image">
                <img src={figure} alt="dfkd" />
            </figure>
        </div>
        </>
    )
}

export default Hero