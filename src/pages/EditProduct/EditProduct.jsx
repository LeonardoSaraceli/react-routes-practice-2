import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditProductPage(props) {

  const { updateProduct } = props

  const [productToUpdate, setProductToUpdate] = useState(null);

  console.log({ productToUpdate });

  const location = useLocation()

  useEffect(() => {
    setProductToUpdate(location.state)
  }, [location])

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    updateProduct(productToUpdate)
    navigate('/products')
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
