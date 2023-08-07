import PropTypes  from 'prop-types';
import { BoxForm, ButtonForm, FormSearch, InputForm } from "./FormMovies-style"

export const FormMovies = ({setSearchParams, searchValue, handleSearch, firstRender}) => {

  
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
        <FormSearch onSubmit={handleSubmit}>
          <InputForm type="search"
          name="search"
          placeholder="Search"
          aria-label='Search'
          onChange={handleChange}
          value={searchValue} />
          <ButtonForm type="submit">Search</ButtonForm>
        </FormSearch>
      </BoxForm>
    </>
  )
}


FormMovies.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  firstRender: PropTypes.object.isRequired,

}