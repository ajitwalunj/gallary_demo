import { setAlert } from "../reducers/commonReducer";

export const showAlert = (type: string, message: string) => (dispach: any) => {
    dispach(setAlert({hidden: false, type, message}))
}