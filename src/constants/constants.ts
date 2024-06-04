import { MdHome } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { BiListPlus } from "react-icons/bi";
import { IconType } from "react-icons";

export type CategoryConfigType = {
    [key:string]: ConfigType | undefined
}

export type ConfigType = {
    title: string;
    logoComponent: IconType;
    apiUrl: string | null;
    doubleSection: boolean;
    displayEssentials: boolean;
    saved?:boolean
} | undefined

export const TABS_CONSTANTS = [
    {
        displayName:"Home",
        logo: MdHome,
        path: '/'
    },
    {
        displayName: "Trending",
        logo: BsFire,
        path: '/trending'
    },
    {
        displayName: "Gaming",
        logo: SiYoutubegaming,
        path: '/gaming'
    },
    {
        displayName: "Saved videos",
        logo: BiListPlus,
        path: '/saved-videos'
    },
    
]
export const CATEGORY_CONFIG: CategoryConfigType = {
    
    "/trending":{
        title:"Trending",
        logoComponent: BsFire,
        apiUrl: "https://apis.ccbp.in/videos/trending",
        doubleSection: true,
        displayEssentials: false
    },
    "/gaming":{
        title:"Gaming",
        logoComponent: SiYoutubegaming,
        apiUrl: "https://apis.ccbp.in/videos/gaming",
        doubleSection: false,
        displayEssentials: true
    },
    "/saved-videos":{
        title:"Saved Videos",
        logoComponent: BiListPlus,
        apiUrl: null,
        doubleSection: true,
        displayEssentials: false,
        saved: true
    }
    
};
export const LOGO_MAPPING = [
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png",
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png",
    "https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
]

export const BANNER_IMAGE_URL = "https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"

export type  ApiStatusTypes = "UNFETCHED" | "PENDING" | "SUCCESS" | "FAILED"
