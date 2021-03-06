import axios from "axios";


export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "USER_LOGIN_REQUEST",
            });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.get(
                "https://my.vivaji.com/api/v2/123456123450/account/client"
            );

            dispatch({
                type: "USER_LOGIN_SUCCESS",
                payload: data,
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: "USER_LOGIN_FAIL",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.response,
            });
        }
    };
};
