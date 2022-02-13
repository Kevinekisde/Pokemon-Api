// en esta pagina creamos la seccion del baner que sera de color negro y  con el logo de pokemon
import "../sections/Section.css";

const Banner = () => (

    <div className="Navbar">
        <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" alt=""></img>
        <div className="menu">
            <a href="/" className="logo">Pokemon<span>Api</span></a>
            <ul className="content">
            <li className="menu_item"><a href="/" className="menu_links">Inicio</a></li>
            <li className="menu_item"><a href="/" className="menu_links">Items</a></li>
            <li className="menu_item"><a href="/pokemon" className="menu_links">Pokemon</a></li>
            </ul>
        </div>

    </div>

)

export default Banner;