import { observer } from "mobx-react";
import { makeObservable, autorun, observable, action } from "mobx";
import { ThemeContext } from "../Context/context";

class Store {
  abc = false;
  isDark = false;
  savedVideos = [];

  constructor() {
    makeObservable(this, {
      isDark: observable,
      setIsDark: action,
    });
    // autorun(() => console.log(this.isDark, "ooxoooo"));
  }
  setAbc(value) {
    this.abc = value;
  }
  setIsDark(value) {
    this.isDark = !this.isDark;
  }
}


const store = new Store();

const MobxStore = observer(({ children }) => {
  return (
    <>
      <ThemeContext.Provider value={store}>
        {children}
      </ThemeContext.Provider>
    </>
  );
});

const StoreWrapper = observer(({ children }) => {
  return <MobxStore>{children}</MobxStore>;

});

export default StoreWrapper;