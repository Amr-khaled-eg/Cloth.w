const host = "http://localhost:8080";
export const jsonFetch = async (url, options) => {
  const newOptions = { ...options };
  if (newOptions !== undefined) {
    if (newOptions.body) {
      newOptions.body = JSON.stringify(options.body);
    }
    if (newOptions.method !== "get" && newOptions.method !== undefined) {
      newOptions["headers"] = newOptions.headers ? newOptions.headers : {};
      newOptions.headers["Content-Type"] = "application/json";
    }
  }
  const res = await fetch(host + url, newOptions);
  return await res.json();
};
