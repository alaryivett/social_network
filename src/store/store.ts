import { configureStore } from '@reduxjs/toolkit';
import { addMessage } from './slices/messagesSlice';

export const store = configureStore({
  reducer: {
    messages: addMessage, // Подключение редюсера
  },
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;