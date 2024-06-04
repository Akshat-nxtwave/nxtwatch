
export const getFormattedUrl = (url: string) => {
    return url.split('/').slice(4).join('');
}

export const getBackgroundColor = (status:string)=>{
    if(status === "PENDING") return "#ffff11";
    if(status === "SUCCESS") return "#11ff00";
    if(status === "FAILED") return "#ff1111";
    return "#8f8f8f";
}

export const getUrlFromPath = (path: string):string =>  {
    
    if(path === '/' || path === '/nxtwave') return "all?search=";
    else if(path.includes('/videos/')) return path.split('/')[2];
    return path.replaceAll('/','');
}