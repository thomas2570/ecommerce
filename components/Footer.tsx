import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2A5E] text-white py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold mb-2">Filters</h3>
          <p className="text-sm text-gray-300">All electronics</p>
          <div className="mt-auto pt-8">
            <p className="text-sm text-gray-400">© 2024 American</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-300 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
