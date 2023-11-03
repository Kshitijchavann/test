import React,{ useState,useEffect } from 'react'

const SecondComponent = () => {

    const [update, setupdate] = useState(0)

    useEffect(() => {
        console.log('second component mounted')

         return () => {
           console.log('second component unmounted')
         }
       }, [update])

  return (
    <div>SecondComponent
        <h5>update:{update}</h5>
        <button onClick={() => setupdate(update + 1)}>Update</button>
    </div>
  )
}

export default SecondComponent