import PropTypes  from 'prop-types';
import { Outlet } from "react-router-dom"
import { BoxForm, ButtonForm, FormMovies, InputForm } from "./Movies-style"

export const Movies = ({setSearchParams, searchValue, handleSearch, firstRender}) => {

  
  const handleChange= ({target:{value}})=>{
    setSearchParams({ search: value})
    firstRender.current = false
  }
  
  
  const handleSubmit= (e)=>{
    e.preventDefault()
    handleSearch(searchValue)
  }

  return (
    <>
      <BoxForm>
        <FormMovies onSubmit={handleSubmit}>
          <InputForm type="search"
          name="search"
          placeholder="Search"
          aria-label='Search'
          onChange={handleChange}
          value={searchValue} />
          <ButtonForm type="submit">Search</ButtonForm>
        </FormMovies>
      </BoxForm>
      <Outlet />
    </>
  )
}


Movies.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  firstRender: PropTypes.object.isRequired,

}