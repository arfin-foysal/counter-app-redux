
import { createStore } from "redux";
import { allreducer } from "./Index";

export const Store = createStore(
    allreducer,
)