import React from 'react';
import { observer } from 'mobx-react';
import { ThemeContext } from '../../utils/ContextUtils';
import StoreClasses from '../../store/mobx';

const store = new StoreClasses.Store();
const MobxStore = observer(({ children }: { children: React.ReactElement }) => {
    return (
      <>
        <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
      </>
    );
  });
  
  const StoreWrapper = observer(
    ({ children }: { children: React.ReactElement }) => {
      return <MobxStore>{children}</MobxStore>;
    }
  );
  
  export default StoreWrapper;