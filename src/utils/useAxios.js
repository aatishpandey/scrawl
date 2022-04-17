import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (path) => {
    const [apiRes, setApiRes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(path, { headers: { authorization: encodedToken } });
                setApiRes(res.data);
                setLoading(false)
            } catch (err) {
                console.log(err + "error")
            }
        })()
    })
    return ({ apiRes, loading });
}

export { useAxios }