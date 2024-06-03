import { makeObservable, observable, action, autorun } from "mobx";
import { VideoType } from "./video";


type VideosList = {
  videos: VideoType[];
  total: number;
};

export default class Store {
  
  savedVideos: VideosList = {videos:[], total:0};
  
  constructor(data: VideosList | null = null) {
    if(data){
        this.savedVideos.videos = data.videos;
        this.savedVideos.total = data.total;
    }
    else {
       
    }
    makeObservable(this, {
      savedVideos: observable,
      setSavedVideos: action,
      saveVideos: action,
    });
    autorun(() => console.log(this.savedVideos, "ooxoooo"));
  }
  
  hasContent(){
    return this.savedVideos.total > 0
  }

  saveVideos(data: VideosList){
      this.savedVideos = data;
  }
  setSavedVideos(data: VideoType) {
    if(this.savedVideos.total === 0) {
        this.savedVideos.videos.push(data);
        this.savedVideos.total++;
    }
    else if (this.savedVideos.videos.find((item) => item.id === data.id)) {
      this.savedVideos.videos = this.savedVideos.videos.filter(
        (item: VideoType) => item.id !== data.id
      );
    } 
    else this.savedVideos.videos.push(data);
  }
}