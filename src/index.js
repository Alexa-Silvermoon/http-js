
// import { obtenerUsuarios } from "./js/http-provider";
// import { init } from "./js/chistes-page";
// obtenerUsuarios().then( console.log );
// init(); //importamos el crearChistesHtml(); desde chistes-page

// import { init } from "./js/usuarios-page";
// init();

import { init } from "./js/archivos-page";

init();


/*

import * as CRUD from './js/crud-provider'; // * me importa todo desde crud-provedire y le pone alias CRUD

CRUD.getUsuario( 2 ).then( console.log );


CRUD.crearUsuario( {

    name: 'Alexander',

    job: 'Programador'

}).then( console.log );


CRUD.actualizarUsuario( 1, {

    name: 'Jeronimo',

    job: 'YouTuber'

}).then( console.log );


CRUD.borrarUsuario( 1 ).then( console.log );



import { obtenerChiste } from "./js/http-provider";

obtenerChiste().then( console.log );


fetch( jokeUrl ).then( resp => {

    // console.log( resp );

    resp.json().then( ( {id, value } ) => {

        //console.log( data );
        console.log( id );
        console.log( value ); //el chiste de chuck norris

    });

});


// fetch ( jokeUrl ) //esta forma es la mejor para mi
   //  .then( resp => resp.json())
   //  .then( console.log );

fetch ( jokeUrl )
    .then( resp => resp.json() )
    .then( ( {id, value } ) => {
        console.log( id, value);
    });

*/