const ProductImageGallery = ({ imageUris }: { imageUris: string[] }) => {
  if (imageUris.length === 0) return null;
  return (
    <ul>
      {imageUris.map((uri) => (
        <li key={uri}>
          <img src={uri} alt="Product Images" />
        </li>
      ))}
    </ul>
  );
};

export default ProductImageGallery;
