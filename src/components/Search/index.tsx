import React, { useContext } from 'react'
import { Container, Input, Button } from './styles';
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../../utils/ContextUtils";

type SearchProps = {
  searchInput:string,
  setSearchInput: Function,
  refetch: ((body:Object)=>void),
  loading?: boolean
}

const Search = ({searchInput, setSearchInput, refetch, loading}:SearchProps) => {
  const val = useContext(ThemeContext);

  return (
    <Container>
        <Input isDark={val.store.isDark} placeholder='Search'value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <Button isDark={val.store.isDark} onClick={refetch} disabled={loading}>
            <IoSearch size={14} />
        </Button>
    </Container>
  )
}

export default Search