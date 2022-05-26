import React from "react";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";

const Blogs = () => {
  return (
    <div className="container mx-auto p-3">
      <CustomTitle page="Blogs" />
      <h2 className="text-3xl md:text-5xl font-bold text-neutral text-center my-10 capitalize">
        Questions Answer
      </h2>

      {/* question one */}
      <div className="p-5 rounded-lg shadow-md border-l-2 border-primary my-8">
        <h4 className="text-2xl font-bold text-neutral my-3">
          How will you improve the performance of a React Application?
        </h4>
        <p className="text-accent my-1">1: Using Functional component.</p>
        <p className="text-accent my-1">
          2: Use react fragments. (<>...</>).
        </p>
        <p className="text-accent my-1">3: Avoiding Inline function.</p>
        <p className="text-accent my-1">4: Avoiding 'index' as key of map.</p>
      </div>

      {/* question two */}
      <div className="p-5 rounded-lg shadow-md border-l-2 border-primary my-8">
        <h4 className="text-2xl font-bold text-neutral my-3">
          What are the different ways to manage a state in a React application?
        </h4>
        <p className="text-accent mt-1 mb-3">
          We need to manage four types of state in react app
        </p>
        <p className="text-accent my-1">
          local state: the data we manage using 'useState' in react app is local
          state.
        </p>
        <p className="text-accent my-1">
          Global state: Which data we need to manage accross multiple
          components.
        </p>
        <p className="text-accent my-1">
          Sever state: We also need to manage the data that come from the
          server.
        </p>
        <p className="text-accent my-1">
          URL state: Sometimes we need to manage the data comes with the url
          like parameters or query, that is url state.
        </p>
      </div>
      {/* question three */}
      <div className="p-5 rounded-lg shadow-md border-l-2 border-primary my-8">
        <h4 className="text-2xl font-bold text-neutral my-3">
          How does prototypical inheritance work?
        </h4>
        <p className="text-accent mt-1 mb-3">
          Prototypal Inheritance allow us to use any properties or any method
          from an object with another object.
        </p>
      </div>
      {/* question four */}
      <div className="p-5 rounded-lg shadow-md border-l-2 border-primary my-8">
        <h4 className="text-2xl font-bold text-neutral my-3">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h4>
        <p className="text-accent mt-1 mb-3">
          State is a variable that stored data. Sometimes we need to change the
          state based on different situation. Thats why we use 'const [products,
          setProducts] = useState([])'. If we set our state like products =
          [...] we will unable to change the value of products if we need.
        </p>
      </div>

      {/* question five */}
      <div className="p-5 rounded-lg shadow-md border-l-2 border-primary my-8">
        <h4 className="text-2xl font-bold text-neutral my-3">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h4>
        <p className="text-accent mt-1 mb-3">
          <p>const products = [ </p>
          <p>
            {`{ name: "Product one", price: 20, description: "Description" },`}{" "}
          </p>
          <p>
            {`{ name: "Product one", price: 20, description: "Description" },`}{" "}
          </p>
          <p>
            {`{ name: "Product two", price: 20, description: "Description" },`}{" "}
          </p>
          <p>
            {`{ name: "Product two", price: 20, description: "Description" },`}{" "}
          </p>
          <p>
            {`{ name: "Product three", price: 20, description: "Description" },`}{" "}
          </p>
          <p>
            {`{ name: "Product three", price: 20, description: "Description" },`}{" "}
          </p>
          <p>]</p>
          <p className="my-3">const searchName = "Product One";</p>
          <p className="my-3">
            {" "}
            {`const searchResult = products.filter((item) => item.name === searchName);`}{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
