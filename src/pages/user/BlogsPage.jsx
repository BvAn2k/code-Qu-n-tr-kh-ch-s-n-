import React from 'react'
import Header from '../../components/user/Header';
import Terminology from './../../components/user/blog/Terminology';
import Footer from '../../components/user/Footer';
import KinhDoanhKS from './../../components/user/blog/KinhDoanhKS';
import ChuyenMuc from '../../components/user/blog/ChuyenMuc';
import BlogMuc from '../../components/user/blog/BlogMuc';

const BlogsPage = () => {
    return (
        <div className="flex flex-col w-full h-auto">
          <Header />
          <Terminology />
          <KinhDoanhKS/>
          <ChuyenMuc/>
          <BlogMuc/>
          <Footer />
        </div>
      );
}

export default BlogsPage