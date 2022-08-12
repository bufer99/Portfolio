import { createSlice } from '@reduxjs/toolkit';
import { languages } from './language';

const slice = createSlice({
    name: 'lang',
    initialState: {
        language: {
            'code': 'hu',
            'words': languages.hu,
        }
    },
    reducers: {
        setLanguage: (state, {payload}) => {
            
            if (payload === "en") {
                state.language = {
                    'code': 'en',
                    'words': languages.en,
                }
            }
            else {
                state.language = {
                    'code': 'hu',
                    'words': languages.hu,
                }
            }

        },
    },
})

export const { setLanguage } = slice.actions

export default slice.reducer

export const getLanguage = (state) => state.lang.language;