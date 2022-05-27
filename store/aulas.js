const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

export const completarAula = (id) => ({type: COMPLETAR_AULA, payload: id});
export const completarCurso = () => ({type: COMPLETAR_CURSO});
export const resetarCurso = () => ({type: RESETAR_CURSO});

const initialState = [
    {id: 14, nome: "Design", completa: false},
    {id: 22, nome: "HTML", completa: false},
    {id: 3, nome: "CSS", completa: false},
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETAR_AULA:
            const index = state.findIndex(aula => aula.id === action.payload);
            state[index].completa = true;
            return state;
        case COMPLETAR_CURSO:
            state = state.map(item => item.completa = true);
            return state;
        case RESETAR_CURSO:
            state = state.map(item => item.completa = false);
            return state;
        default:
            return state;
    }
};

export default reducer;

