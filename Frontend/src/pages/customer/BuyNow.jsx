// import { useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { CartContext } from "../../contexts/CartContext";
// import QRCode from "react-qr-code";
// import { toast } from "react-toastify";

// const BuyNow = () => {
//   const { id } = useParams();
//   const { cartItems } = useContext(CartContext);
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [file, setFile] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     email: ""
//   });

//   const product = cartItems.find((item) => String(item.id) === id);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
//       toast.error("File size should be less than 2MB");
//       return;
//     }
//     setFile(selectedFile);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate form
//     if (!formData.name || !formData.phone || !formData.address || !formData.email) {
//       toast.error("Please fill all required fields");
//       return;
//     }
    
    
//     // Process payment
//     if (paymentMethod === "qr") {
//       toast.success("Please scan the QR code to complete payment");
//     } else {
//       toast.success("Processing card payment...");
//     }
    
//     // Here you would typically send the data to your backend
//     console.log({
//       product,
//       userInfo: formData,
//       paymentMethod,
//       file
//     });
//   };

//   if (!product) {
//     return (
//       <div className="p-10 text-center">
//         <h1 className="text-2xl font-bold text-gray-800">Product not found in cart</h1>
//         <p className="text-gray-500 mt-2">Please add the product to your cart again.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10 rounded-lg">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">Complete Your Purchase</h1>
      
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Product Information */}
//         <div className="w-full md:w-1/2">
//           <div className="flex gap-4 mb-6">
//             <img
//               src={product.images?.[0] || product.thumbnail}
//               alt={product.title}
//               className="w-24 h-24 rounded-lg object-cover"
//             />
//             <div>
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-gray-600">${product.price} × {product.quantity}</p>
//               <p className="font-bold mt-1">
//                 Total: ${(product.price * product.quantity).toFixed(2)}
//               </p>
//             </div>
//           </div>

//           {/* User Information Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <h2 className="text-xl font-semibold">Your Information</h2>
            
//             <div>
//               <label className="block text-gray-700 mb-1">Full Name*</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1">Email*</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1">Phone Number*</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1">Shipping Address*</label>
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded"
//                 rows="3"
//                 required
//               ></textarea>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1">Additional Document </label>
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="w-full p-2 border rounded"
//                 accept=".pdf,.jpg,.png,.doc"
//               />
//               <p className="text-sm text-gray-500 mt-1">Max file size: 2MB (PDF, JPG, PNG, DOC)</p>
//             </div>
//           </form>
//         </div>

//         {/* Payment Section */}
//         <div className="w-full md:w-1/2">
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            
//             <div className="flex gap-4 mb-6">
//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod("card")}
//                 className={`px-4 py-2 rounded-lg ${paymentMethod === "card" ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//               >
//                 Credit Card
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setPaymentMethod("qr")}
//                 className={`px-4 py-2 rounded-lg ${paymentMethod === "qr" ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//               >
//                 QR Payment
//               </button>
//             </div>

//             {paymentMethod === "card" ? (
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-gray-700 mb-1">Card Number</label>
//                   <input
//                     type="text"
//                     placeholder="1234 5678 9012 3456"
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-gray-700 mb-1">Expiry Date</label>
//                     <input
//                       type="text"
//                       placeholder="MM/YY"
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-1">CVV</label>
//                     <input
//                       type="text"
//                       placeholder="123"
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-center">
//                 <div className="bg-white p-4 rounded-lg inline-block mb-4">
//                   <QRCode 
//                     value={`payment:${product.id}:${(product.price * product.quantity).toFixed(2)}`} 
//                     size={180}
//                   />
//                 </div>
//                 <p className="text-gray-600">Scan this QR code with your payment app</p>
//               </div>
//             )}

//             <button
//               type="submit"
//               onClick={handleSubmit}
//               className="mt-6 w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
//             >
//               Complete Purchase
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyNow;
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";

const BuyNow = () => {
  const { id } = useParams();
  const { cartItems } = useContext(CartContext);

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: ""
  });

  const product = cartItems.find((item) => String(item.id) === id);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
      toast.error("File size should be less than 2MB");
      return;
    }
    setFile(selectedFile);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.phone || !formData.address || !formData.email) {
    toast.error("Please fill all required fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/orders/buy-now", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: formData.name,
        email: formData.email,
        productId: product.id,
        productTitle: product.title,
        price: product.price,
        quantity: product.quantity,
        totalAmount: product.price * product.quantity,
        address: formData.address,
        phone: formData.phone,
        paymentMethod: "qr"
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("🎉 Order placed successfully!");
    } else {
      toast.error(data.error || "❌ Order failed");
    }
  } catch (error) {
    console.error("Order failed", error);
    toast.error("🚨 Something went wrong while placing the order");
  }
};


  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Product not found in cart</h1>
        <p className="text-gray-500 mt-2">Please add the product to your cart again.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Complete Your Purchase</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-4 mb-6">
            <img
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price} × {product.quantity}</p>
              <p className="font-bold mt-1">
                Total: ${(product.price * product.quantity).toFixed(2)}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold">Your Information</h2>

            <div>
              <label className="block text-gray-700 mb-1">Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Shipping Address*</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="3"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Additional Document</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
                accept=".pdf,.jpg,.png,.doc"
              />
              <p className="text-sm text-gray-500 mt-1">Max file size: 2MB</p>
            </div>

            <button
              type="submit"
              className="mt-6 w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* QR Code Only */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4">QR Payment</h2>
            <div className="bg-white p-4 rounded-lg inline-block mb-4">
            {product && (
  <QRCode
    value={`payment:${product.id}:${(product.price * product.quantity).toFixed(2)}`}
    size={180}
  />
)}
            </div>
            <p className="text-gray-600">Scan this QR code with your payment app</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;


