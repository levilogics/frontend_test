import axios from "axios";
import _ from "lodash";

interface FetchOption {
    sort: string;
    order: "asc" | "desc";
}

export const userService = {
    fetch: async (_option: FetchOption) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const option = { ..._option };
        const users = response.data;
        return _.orderBy(users, [option.sort], option.order);
    }
}