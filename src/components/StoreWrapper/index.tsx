import React from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../utils/ContextUtils";
import StoreClasses from "../../store/mobx";

const store = new StoreClasses.ThemeClass();
const savedVideosStore = new StoreClasses.VideosList();
const MobxStore = observer(({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <StoreContext.Provider value={{ store, savedVideosStore }}>
        {children}
      </StoreContext.Provider>
    </>
  );
});

const StoreWrapper = observer(
  ({ children }: { children: React.ReactElement }) => {
    return <MobxStore>{children}</MobxStore>;
  }
);

export default StoreWrapper;
