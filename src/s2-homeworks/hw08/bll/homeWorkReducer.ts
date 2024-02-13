import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state].sort((a,b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return action.payload === 'up' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
            })
            return sortedState
        }
        case 'check': {
         const filteredState = state.filter((user:UserType) => user.age >= action.payload);
            return filteredState; // need to fix
        }
        default:
            return state
    }
}
