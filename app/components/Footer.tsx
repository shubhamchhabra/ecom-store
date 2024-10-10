// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-6 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p>
              We provide premium products with the best quality for your needs. Our mission is to bring the best shopping experience to our customers.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/products" className="hover:text-yellow-500">Products</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <ul>
              <li><a href="https://facebook.com" className="hover:text-yellow-500">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:text-yellow-500">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:text-yellow-500">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  