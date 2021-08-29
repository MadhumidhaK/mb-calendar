const fetchData = async (url, options = {}, successCB = () => {}, errorCB = () => {}) => {
    let responseStatusCode;
    let response; 
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          ...options
        }
      });
      responseStatusCode = res.status;
      const json = await res.json();
      console.log(json)
      if(res.status === 200 || res.isLoggedIn){
        successCB(json);
        response = json;
        return json;
      }
      
      errorCB(json);
      return;
    } catch (error) {
      errorCB({error: error});
    }
}

export default fetchData;