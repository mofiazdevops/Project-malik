// for details pool

import axios from "axios";

export const getPools = () => {
    return axios.get(
        `${process.env.REACT_APP_IDO_URL_BACKEND_DEV}/v1/pools/all-pools`
    );
};

// for details pool

export const getPoolsById = (id: string) => {
    return axios.get(
        `${process.env.REACT_APP_IDO_URL_BACKEND_DEV}/v1/pools/details/${id}`
    );
};

//update claim in staking record
export const allDeployedStakings = () => {
    return axios.get(
        `${process.env.REACT_APP_IDO_URL_BACKEND_DEV}/v1/stakings/all-deployed-stakings`
    );
};
