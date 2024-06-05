import { makeObservable, observable, action, autorun } from "mobx";
import { ApiStatusTypes } from "../../constants/constants";

export type ThemeClassType = {
  isDark: boolean | null;
  apiStatus: { [key: string]: ApiStatusTypes };
  setIsDark: () => void;
  setApiStatus: (url: string, value: ApiStatusTypes) => void;
};

export default class ThemeClass {
  isDark: Boolean | null;
  apiStatus: { [key: string]: ApiStatusTypes };
  constructor() {
    this.isDark = false;
    this.apiStatus = {};
    makeObservable(this, {
      isDark: observable,
      apiStatus: observable,
      setIsDark: action,
      setApiStatus: action,
    });
    autorun(() => console.log(this.apiStatus, "gggggggggggggppppp"));
  }

  setIsDark(value?: any) {
    this.isDark = !this.isDark;
  }

  setApiStatus(
    url: string,
    value: "UNFETCHED" | "PENDING" | "SUCCESS" | "FAILED"
  ) {
    this.apiStatus[url] = value;
  }
}
