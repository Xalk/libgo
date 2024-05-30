import axios, {AxiosError, AxiosRequestConfig} from "axios";


export const apiInstance = axios.create({
    baseURL: "",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
): Promise<T> => {
    const token = localStorage.getItem("token");
    const changedConfig = {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        },
    }
    return apiInstance({
        ...changedConfig,
        ...options,
    }).then((r) => r.data);
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
