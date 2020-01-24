import React from 'react';
import Review from './review';

function ReviewsList() {
    return(
        <>
            <Review 
                user="Ciccio"
                review="Ottimo servizio"
            />
            <Review 
                user="Salvo"
                review="Il pacco è arrivato nei tempi previsti"
            />
            <Review 
                user="Andrea"
                review="Sempre puntuali"
            />
            <Review 
                user="Giulio"
                review="Ok"
            />
            <Review 
                user="Lorenzo"
                review="Ordino sempre da questo sito e mi sono sempre trovato bene"
            />
            <Review 
                user="Gimbo"
                review="Tutto bene"
            />
            <Review 
                user="Baz"
                review="Sempre soddisfatto"
            />
        </>
    )
}

export default ReviewsList;