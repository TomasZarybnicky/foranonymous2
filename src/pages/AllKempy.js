import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./AllKempy.css"

const AllKempy = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect( () => {
    projectFirestore.collection("kempy").get().then( (snapshot) => {

      if (snapshot.empty) {
        setError("Žádné kempy k vypsání")
      } else {
        let result = []
        snapshot.docs.forEach( (oneKemp) => {
          result.push( {id: oneKemp.id, ...oneKemp.data()} )
        })
        setData(result)
      }
    }).catch( (err) => {
      setError(err.message)
    })
  }, [])

  return (
    <section>
      {error && <p>{error}</p>}
      {data.map( (oneKemp) => {
        const {id, title} = oneKemp

        return <div key={id} className="one-kemp">
          <p>{title}</p>
          <Link to={`/one-kemp/${id}`}>Více informací</Link>
        </div>
      } )}
    </section>
  )
}

export default AllKempy