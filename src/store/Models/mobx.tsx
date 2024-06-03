
import { makeObservable, observable, action } from "mobx";

export default class Store {
    isDark: Boolean | null;
  
    constructor() {
      this.isDark = false;
      makeObservable(this, {
        isDark: observable,
        setIsDark: action,
      });
      // autorun(() => console.log(this.isDark, "ooxoooo"));
    }
    
    setIsDark(value: any) {
      this.isDark = !this.isDark;
    }
    
  }

