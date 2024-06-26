const ProductReview = ({ desc }) => {
  return (
    <div className='px-8'>
      <h2 className="text-lg mb-4">نقد و بررسی آیفون 15</h2>
      <p className="text-justify">{desc}</p>
    </div>
  );
};

export default ProductReview;
