import { configureStore } from '@reduxjs/toolkit'
import todoList from '../features/todoList'

export const store = configureStore({
  reducer: {
    todos: todoList
  }
})
