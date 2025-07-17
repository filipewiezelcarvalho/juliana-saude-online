import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container-section py-16">
          <h1 className="font-poppins text-4xl font-bold text-charcoal mb-8">Blog</h1>
          <p className="text-lg text-charcoal/80">Página em desenvolvimento...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;