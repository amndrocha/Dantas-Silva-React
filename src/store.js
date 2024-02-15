import { configureStore } from "@reduxjs/toolkit";
import  equipeReducer from "./EquipeSlice"

export default configureStore({
	reducer: {
		equipe: equipeReducer,
	},
})