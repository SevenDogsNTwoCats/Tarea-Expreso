export const GeneracionCAI = (idEstablecimiento, puntoEmision, tipoDocumento) => {

    //id único de 8 dígitos aleatorios
    const generarCorrelativo = () => {
        const longitud = 8;
        let codigoAleatorio = '';
        const caracteres = '0123456789';

        for (let i = 0; i < longitud; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            codigoAleatorio += caracteres.charAt(indiceAleatorio);
        }

        return codigoAleatorio;
    }

    const correlativo = generarCorrelativo()

    return `${idEstablecimiento}-${puntoEmision}-${tipoDocumento}-${correlativo}`

}