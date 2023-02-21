import { useEffect, useReducer, useRef } from "react";

function useFetch(url, limit, option) {
  const cache = useRef({})
  const cancelRequest = useRef(false);

  const initialState = {
    error: undefined,
    data: undefined,
    loading: false,
  };

  const fetchReducer = (state, action) => {
    switch(action.type) {
      case "loading":
        return {...initialState, loading: true};
      case "fetched":
        return { ...initialState, data: action.payload};
      case "error":
        return { ...initialState, error: action.payload};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;
    cancelRequest.current = false;

    const fetchData = async () => {
      // create an async function that contains the fetching logic
      dispatch({ type: "loading" });

      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, option);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        // get the data from the response and store it in the cache
        const data = await response.json();
        if (limit) data.splice(limit);
        cache.current[url] = data;
        if (cancelRequest.current) return;
        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;
        dispatch({ type: "error", payload: error });
      }
    };
    fetchData();
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
}

export default useFetch;