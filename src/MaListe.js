import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function MaListe(){

    const favoris = JSON.parse(localStorage.getItem('favoris') || '[]');
    const [fav, setFav] = useState([])

     function deleteFavoris() {

    //     if (id == 1) {
    //         favoris.splice(0, id);
    //         setFav(JSON.stringify(favoris));
    //         localStorage.setItem('favoris', fav);
    //     } else {
    //         favoris.splice(id-1, 1);
    //         setFav(JSON.stringify(favoris));
    //         localStorage.setItem('favoris', fav);
    //     }
    }

    return(
        <><div>
            <Header/>
        </div>

        <section className="section">

            <center>
                <div className="container">
                    <div className="columns is-centered">
                        <div className="film">
                            <h1 className="title is-1">Mes favories:</h1><br></br>
                            <div>
                            <div>
                                {favoris.map((item) => {
                                    return (
                                        <p key={item.id}>
                                            <Link to={`/detail/${item?.id}`}><img src={`http://image.tmdb.org/t/p/w185${item?.image}`} alt="image"></img></Link>
                                            <button onClick={deleteFavoris}>Supprimer des favoris</button>
                                        </p>
                                    );
                                })}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
           
        </section></>
    );
}

export default MaListe;