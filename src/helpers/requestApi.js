export const requestApi = async url => {

    const res = await fetch('https://newcorsproxy.herokuapp.com/' + url);
    const data = await res.json();

    return data;
}

