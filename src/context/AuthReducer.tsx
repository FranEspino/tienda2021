import { Location } from "../interfaces/appInterfaces"

export interface AuthState {
    status: 'cheking' | 'authenticated' | 'not-authenticated';
    errorMessage: string;
    user: any | null;
    location_coords : any;
    destination_coords : any;
    location_address: string
    destination_address: string
}

type AuthAction =
    | { type: 'signUp', payload: { user: Object } }
    | { type: 'addError', payload: string }
    | { type: 'removeError', }
    | { type: 'notAuthenticated' }
    | { type: 'logOut' }
    | { type: 'locationCoords', payload: { location_coords: Location }  }
    | { type: 'destinationCoords', payload: { destination_coords: Location }  }
    | { type: 'locationAddress', payload: { location_address: string }  }
    | { type: 'destinationAddress', payload: { destination_address: string }  }



export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      
        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                user: action.payload.user
        }

        case 'locationCoords':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                location_coords: action.payload.location_coords
        }
        case 'destinationCoords':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                destination_coords: action.payload.destination_coords
        }
        case 'locationAddress':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                location_address: action.payload.location_address
        }


        case 'destinationAddress':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                destination_address: action.payload.destination_address
        }
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                errorMessage: action.payload
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }


        case 'logOut':
            return {
                ...state,
                status: 'not-authenticated',
                user: null
            }
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                user: null
            }
        default:
            return state;
    }


}