const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";

export const incrementarTempo = () => ({type: INCREMENTAR_TEMPO});
export const reduzirTempo = () => ({type: REDUZIR_TEMPO});
export const modificarEmail = (newEmail) => ({type: MODIFICAR_EMAIL, payload: newEmail});


const initialState = {
    nome: "André Rafael",
    email: "andre@origamid.com",
    diasRestante: 120,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENTAR_TEMPO:
            state.diasRestante += 1;
            return state;
        case REDUZIR_TEMPO:
            state.diasRestante -= 1;
            return state;
        case MODIFICAR_EMAIL:
            state.email = action.payload;
            return state;
        default:
            return state;
    }
}

export default reducer;
