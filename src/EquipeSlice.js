import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {title: "Sócios",
    members: [
        {
            name: "Nilton Pereira da Silva",
            job: "Sócio",
            contact: "nilton.pereira@dantassilva.com.br",
            picture: "img/equipe0.jpg",
            id: 0,
        },
        {
            name: "Jorge Antonio Dantas Silva",
            job: "Sócio",
            contact: "jorgeantonio@dantassilva.com.br",
            picture: "img/equipe0.jpg",
            id: 1,
        },
        ],
    },
    {title: "Jurídico",
    members: [
        {
            name: "Aparecida Cavalcante Gomes",
            job: "Jurídico",
            contact: "aparecida.gomes@dantassilva.com.br",
            picture: "img/equipe0.jpg",
            id: 2,
        },
        {
            name: "Iuri Rocha Dantas Silva",
            job: "Jurídico",
            contact: "iurirocha@dantassilva.com.br",
            picture: "img/equipe0.jpg",
            id: 3,
        },
        ],
    },
];

export const equipeSlice = createSlice({
    name: 'equipe',
    initialState: {
        list: initialState,
        id: 4,
    },
    reducers: {
        changeMember: (state, action) => {
            if (action.payload.id !== "") {
                state.list = state.list.map((member) => {
                    if (member.id === action.payload.id) {
                        return({
                            name: action.payload.name,
                            job: action.payload.job,
                            contact: action.payload.contact,
                            picture: action.payload.picture,
                            id: action.payload.id,     
                        });
                    } else {
                        return(member);
                    }
                });
            } else {
                const newMember = {
                    name: action.payload.name,
                    job: action.payload.job,
                    contact: action.payload.contact,
                    picture: action.payload.picture,
                    id: state.id, 
                };
                state.list = [
                    ...state.list,
                    newMember,
                ];
                state.id++;
            }            
        },
        removeMember: (state, action) => {
            state.list = state.list.filter((address) => address.id !== action.payload);
        },        
    }

}
);

export  const {changeMember, removeMember } = equipeSlice.actions;
export default equipeSlice.reducer;