import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDialogMessages } from '@/services/api';

interface MessagesState {
    items: Message[];
    loading: boolean;
    error: string | null;
    isLoaded: boolean; // Были ли данные загружены ранее
  }
  
const initialState: MessagesState = {
    items: [],
    loading: false,
    error: null,
    isLoaded: false,
};

interface Message {
  id: string;
  text: string;
}

export const fetchMessages = createAsyncThunk(
    'messages/fetch',
    async (_, { getState, rejectWithValue }) => {
      const { messages } = getState() as RootState;
      
      // Если данные уже загружены - не делаем новый запрос
      if (messages.isLoaded) {
        return messages.items;
      }
  
      try {
        const data = await api.getMessages(); // Ваш метод из api.ts
        return data;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );


export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;