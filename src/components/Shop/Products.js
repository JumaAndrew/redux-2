import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_products = [
  {
    id: 'item1',
    price: 100,
    title: 'lord of the rings',
    description: 'a book about a ring',
  },
  {
    id: 'item2',
    price: 150,
    title: 'harry potter',
    description: 'a book about wizards',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
