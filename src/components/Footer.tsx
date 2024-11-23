import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Tv className="text-blue-400" size={32} />
            <span className="font-bold text-xl text-white">What TV Should I Buy? - Quiz</span>
          </div>
          <p className="text-gray-400">
            Your trusted companion in finding the perfect TV for your home.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <span>support@tvguide.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>123 TV Street, NY 10001</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to get the latest TV news and deals.</p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
            />
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400">
          © {new Date().getFullYear()} TV Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
}