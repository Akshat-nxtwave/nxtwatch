import React, { useContext } from 'react'
import { Container, Input, Button } from './styles';
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../../Context/context";
const Search = ({searchInput, setSearchInput, refetch, loading}) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <Container>
        <Input isDark={isDark} placeholder='Search'value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <Button isDark={isDark} onClick={refetch} disabled={loading}>
            <IoSearch size={14} />
        </Button>
    </Container>
  )
}

export default Search