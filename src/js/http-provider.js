
const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

//llave de cloudinary
const cloudPreset = 'zdk9jqzk';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/alexa-silvermoon/upload';

const obtenerChiste = async () => {

    try{

        const resp = await fetch( jokeUrl );

        if ( !resp.ok) throw 'No se pudo realizar la peticion de la respuesta';

        // const chiste = await resp.json();

        // return chiste;

        //return await resp.json();

        const { icon_url, id, value} = await resp.json();

        return { icon_url, id, value}


    } catch ( err ){

        throw err;

    }

}

const obtenerUsuarios = async () => {

    const resp = await fetch( urlUsuarios );
    console.log(resp);// funciona bien

    const { data:usuarios } = await resp.json();
    console.log( usuarios );

    return usuarios;

}

//archivoSubir de tipo file
const subirImagen = async (archivoSubir) => {

    const formData = new FormData();

    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch( cloudUrl, {
            
            method: 'POST',
            body: formData

        });

        if ( resp.ok ){

            const cloudResp = await resp.json();
            // console.log(cloudResp);

            return cloudResp.secure_url;

        } else {

            throw await resp.json();

        }


    } catch( err ) {

        throw err;

    }

}

export {

    obtenerChiste,
    obtenerUsuarios,
    subirImagen

}
