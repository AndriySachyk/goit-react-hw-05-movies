import { ArrowBck, LinkBck,  } from "components/MovieDetails/MovieDetails-style"
// import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      
          <LinkBck to={'/'}><ArrowBck>&#10148;</ArrowBck>Go Back</LinkBck>
    
        <h1>Opss is not found</h1>
    </div>
)
}

export default ErrorPage