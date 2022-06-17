import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Main from '../Main/Main'
import data from '../../Data'
import Pagnition from '../Main/Pagnition/Pagnition'
import FindMore from '../FindMore/FindMore'
import Posts from '../Posts/Posts'
import Join from '../Join/Join'
import MiniContact from '../Join/MiniContact/MiniContact'
import Footer from '../Footer/Footer'

function Home(props) {
  const [newArr, setNewArr] = useState([])
  let [currentPage, setCurrentPage] = useState(1)
  let [postsPerPage, setPostsPerPage] = useState(9)

  useEffect(() => {
    setNewArr(data)
  }, [])

  let indexOfLastPage = currentPage * postsPerPage
  let indexOfFirstPage = indexOfLastPage - postsPerPage
  let currentPosts = newArr.slice(indexOfFirstPage, indexOfLastPage)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Main data={data} newArr={currentPosts} setNewArr={setNewArr} />
        <Pagnition
          postsPerPage={postsPerPage}
          totalPosts={newArr.length}
          paginate={paginate}
        />
        <FindMore />
        <Posts />
        <Join />
        <MiniContact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
