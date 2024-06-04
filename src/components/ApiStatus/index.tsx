import { Container } from "./styles";
import { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../utils/ContextUtils";
import { getUrlFromPath, getBackgroundColor } from "../../utils/pathUrlUtils";
const ApiStatus = observer(({ path }: { path: string }) => {
  const val = useContext(StoreContext);
  const url = getUrlFromPath(path); 
  return <Container style={{backgroundColor:getBackgroundColor(val.store.apiStatus[url])}}/>;
});

export default ApiStatus;
