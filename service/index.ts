import axios from "axios";

export const userService = {
    fetch: async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            return result.data;
        } catch (error) {
            return [];
        }
    },
}