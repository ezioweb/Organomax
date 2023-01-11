//src/componentes/Rodape/index.js

import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="icone Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="icone Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="icone Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.svg" alt="Logotipo" />
        </section>
        <section>
            <p>App - Ezio R. L.</p>
            <p>Curso Alura React</p>
        </section>
    </footer>)
}

export default Rodape