

import { makeObservable, observable, action } from "mobx";
type ObjectType = {
    id: string;
} & { [key: string]: any };
  

export default class Store {
    abc: Boolean | null = false;
    isDark: Boolean | null = false;
    savedVideos: ObjectType[] = [];
  
    constructor() {
      makeObservable(this, {
        isDark: observable,
        savedVideos: observable,
        setIsDark: action,
        setSavedVideos: action,
      });
      // autorun(() => console.log(this.isDark, "ooxoooo"));
    }
    setAbc(value: Boolean | null) {
      this.abc = value;
    }
    setIsDark(value: any) {
      this.isDark = !this.isDark;
    }
    setSavedVideos(data: ObjectType) {
      if (this.savedVideos.find((item) => item.id === data.video_details.id)) {
        this.savedVideos = this.savedVideos.filter(
          (item: ObjectType) => item?.id !== data.video_details.id
        );
      } else this.savedVideos.push(data.video_details);
    }
  }

