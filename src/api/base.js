const BASE_URL = "https://nonograms.dododev.net/api";
//const BASE_URL = "";
const defaults = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

async function getResponseData(response){
    if(response.headers.get('Content-Type').startsWith("application/json")){
        return await response.json();
    }
    return await response.text();
}

export async function get(url, headers) {
    const headers_obj = new Headers();
    
    Object.entries(defaults.headers).forEach(header => {
        headers_obj.append(...header);
    });

    Object.entries(headers).forEach(header => {
        headers_obj.append(...header);
    });

    const response = await fetch(BASE_URL + url, {
        headers: headers_obj,
    });
    if(response.status >= 400){
        throw new Error(response);
    }
    const data = await getResponseData(response);
    return {
        data: data,
        body: response.body, 
        response
    };
}

export async function post(url, request_body, headers = {}) {
    const headers_obj = new Headers();
    
    Object.entries(defaults.headers).forEach(header => {
        headers_obj.append(...header);
    });

    Object.entries(headers).forEach(header => {
        headers_obj.append(...header);
    });

    const response = await fetch(
        BASE_URL + url,
        {
            method: 'post',
            body: request_body ? JSON.stringify(request_body) : undefined,
            headers: headers_obj
        }
    );
    if(response.status >= 500){
        throw new Error(response);
    }
    if(response.status >= 400){
        throw new Error(await response.text());
    }
    const data = await getResponseData(response);
    return {
        data: data,
        body: response.body, 
        response
    };
}