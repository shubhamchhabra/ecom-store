// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold logo-text">
          <Link href="/">Ecomm Express</Link>
        </div>
        <nav className="space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="space-x-4">
          <Link href="/cart" className="hover:text-yellow-500">Cart</Link>
          <Link href="/login" className="hover:text-yellow-500">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
