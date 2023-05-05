import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'
import postsService from '../../services/posts';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';


const CatalogPage = () => {
  const [posts, setPosts] = useState([])
  const [sorted, setSorted] = useState("price")
  const [postsOffset, setPostsOffset] = useState(0); // с какого продукта начинать
  const postsPerPage = 4
  const [gridView, setGridView] = useState(true)

  const endOffset = postsOffset + postsPerPage; // число до которого нам нужно продвинуть
  console.log(`Loading post from ${postsOffset} to ${endOffset}`);  
  const currentPosts = posts.slice(postsOffset, endOffset)
  const pageCount = Math.ceil(posts.length / postsPerPage);  //количесво страниц 

  const handlePageClick = (event) => {
    const newOffset = event.selected * postsPerPage
    setPostsOffset(newOffset);
  };

  
  useEffect(() => {
    postsService
    .get().then(res => {
      const sortedPosts = res.data.sort((a,b) => a.price - b.price)
      setPosts(res.data)
    })
    .catch(err => console.log(err.response.data))
  }, [])

  useEffect(() => {
    if (sorted == "price") {
    const sortedPosts = [...posts].sort((a,b) => a.price - b.price)
    setPosts(sortedPosts)
    console.log("price")
    } else {
      const sortedPosts = [...posts].sort((a,b) => b.price - a.price)
      setPosts(sortedPosts)
    }  
    
    if (sorted == "newest") {
      const sortedPosts = [...posts].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      setPosts(sortedPosts)
      console.log("po date")
        } 
        if(sorted == "newestDesc") {
          const sortedPosts = [...posts].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
          setPosts(sortedPosts)
        }
  },[sorted])
  console.log(posts)

    const handleChangeGridView = ( value ) => {
      setGridView(value)
    }

  return (
    <div>
      <Breadcrumbs  />
      <Filter setSorted={setSorted} sorted={sorted}
              handleChangeGridView={handleChangeGridView}
      />
      <div className={styles["products-wrapper"]}>
        {currentPosts.map(product => {
          return (
            <Product 
            gridView={gridView}
            key={product._id}
            img={product.img}
            title={product.title}
            price={product.price}
            date={product.createdAt}
            />
          ) 
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      <Info />
    </div>
  );
};

export default CatalogPage;