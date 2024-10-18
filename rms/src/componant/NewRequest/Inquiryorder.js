import React, { useState } from "react";

const Inquiryorder = () => {
  const [npcCode, setNpcCode] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const products = [
    { 
        npc: "125NNNN440", 
        name: "0.45% SALINE SOLUTION" 
    },
    { 
        npc: "110CDYN009", 
        name: "10 ENZYMATIC CLEANER" 
    },
    {
      npc: "100ARCH001",
      name: "1 ML SYRINGE (4/PKG)"
    },
    {
      npc: "110CDYN009",
      name: "10ENZYMATIC CLEANER"
    },
    {
      npc: "115BENC001",
      name: "10X EZ PREP SOLUTION, 2L"
    },
    {
      npc: "400PLAT002",
      name: "12-WELL-PLATE"
    },
    {
      npc: "125NNNN442",
      name: "12X75 MM ROUND BOTTOM POLYSTYRENE TUBES"
    },
    {
      npc: "135NNNN002",
      name: "1-HEPTANESULFONIC ACID SODIUM SALT HPLC"
    },
    {
      npc: "135NNNN003",
      name: "1-HEXANESULFONIC ACID SODIUM SALT HPLC G"
    }
  ];

  // Handle NPC selection
  const handleNpcChange = (npc) => {
    setNpcCode(npc);
    const selectedProduct = products.find(p => p.npc === npc);
    if (selectedProduct) {
      setProduct(selectedProduct.name);
    }
  };

  // Handle product selection
  const handleProductChange = (name) => {
    setProduct(name);
    const selectedNpc = products.find(p => p.name === name);
    if (selectedNpc) {
      setNpcCode(selectedNpc.npc);
    }
  };

  // Add selected item to the cart
  const addToCart = () => {
    if (npcCode && product && quantity > 0) {
      const existingItem = cart.find(item => item.npc === npcCode);
      if (existingItem) {
        // Update the existing item quantity
        setCart(
          cart.map(
            item =>
              item.npc === npcCode
                ? { ...item, count: item.count + parseInt(quantity) }
                : item
          )
        );
      } else {
        // Add new item to the cart
        setCart([
          ...cart,
          { npc: npcCode, name: product, count: parseInt(quantity) }
        ]);
      }
    } else {
      alert("Please select NPC, product, and enter a valid quantity");
    }
  };

  // Increment item count in cart
  const incrementItem = npc => {
    setCart(
      cart.map(
        item => (item.npc === npc ? { ...item, count: item.count + 1 } : item)
      )
    );
  };

  // Decrement item count in cart
  const decrementItem = npc => {
    setCart(
      cart.map(
        item =>
          item.npc === npc && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
      )
    );
  };

  // Remove item from cart
  const removeItem = npc => {
    setCart(cart.filter(item => item.npc !== npc));
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4>Order Cart</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col">
              <select
                className="form-select"
                value={npcCode}
                onChange={e => handleNpcChange(e.target.value)}
                aria-label="Select NPC"
              >
                <option value="">Select NPC</option>
                {products.map(product =>
                  <option key={product.npc} value={product.npc}>
                    {product.npc}
                  </option>
                )}
              </select>
            </div>
            <div className="col">
              <select
                className="form-select"
                value={product}
                onChange={e => handleProductChange(e.target.value)}
                aria-label="Select Product"
              >
                <option value="">Select Product</option>
                {products.map(product =>
                  <option key={product.npc} value={product.name}>
                    {product.name}
                  </option>
                )}
              </select>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                min="1"
                placeholder="0"
              />
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={addToCart}>
                ADD
              </button>
            </div>
          </div>

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>NPC Code</th>
                <th>Name</th>
                <th>Count</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item =>
                <tr key={item.npc}>
                  <td>
                    {item.npc}
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.count}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => incrementItem(item.npc)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => decrementItem(item.npc)}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(item.npc)}
                    >
                      <i className="bi bi-trash" /> {/* Bootstrap Icon */} 
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="text-center">
            <button className="btn btn-primary mt-3">Order Summary</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiryorder;
