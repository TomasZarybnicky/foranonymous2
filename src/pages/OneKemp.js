import "./OneKemp.css"
import { useParams, Link} from "react-router-dom"
import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"

const OneKemp = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  const { movieId } = useParams()

  useEffect( () => {
    projectFirestore.collection("kempy").doc(movieId).get().then( (document) =>
    {
      if (document.exists) {
        setData(document.data())
      } else {
        setError("Nenašli jsme tento kemp")
      }
    }).catch( (err) => {
      setError(err.message)
    })
  }, [movieId])

  return ( <section className="one-movie-section">
    {error && <p>{error}</p>}
    <h1>{data.title}</h1>
    <p>{data.maxPeople}</p>
    <p>{data.minPeople}</p>
    <Link exact to="/all-kempy">Zpět na seznam filmů</Link>
  </section>
  )
}

export default OneKemp