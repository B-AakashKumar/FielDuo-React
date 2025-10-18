// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black backdrop-blur-lg pt-12 pb-8 px-4 border-t border-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Main 3-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          
          {/* 1. Company Info & Socials (Col 1) */}
          <div>
            <a href="#top" className="flex items-center group mb-4">
              <span className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                Fielduo
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Delivering innovative field service solutions with trust and excellence. 
              We turn your vision into reality with creativity and professionalism.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="https://x.com/fielduo82492" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.instagram.com/fielduo_fsm?igsh=M21qY3QyZnF3Mjlh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.threads.net/@fielduo_fsm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm0-6c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/>
                </svg>
              </a>
              <a href="https://www.reddit.com/u/Fielduo_FSM/s/6c7iraNvdN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.885 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0-.1.24c0 .094.037.18.1.24.065.058.142.094.23.094h4.234a.33.33 0 0 0 .232-.094.33.33 0 0 0 .1-.24.33.33 0 0 0-.1-.24.327.327 0 0 0-.232-.094H9.284z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/fielduo-fsm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Company Links (Col 2) */}
          <div className="md:mt-0 mt-8"> {/* Added mt-8 for spacing on small screens when this column shifts */}
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#About" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block py-1">About Us</a></li>
              <li><a href="#Pricing" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block py-1">Pricing</a></li>
              <li><a href="#Contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block py-1">Contact</a></li>
            </ul>
          </div>
          
          {/* 3. Get in Touch (Contact Info) (Col 3) */}
          <div className="md:mt-0 mt-8"> {/* Added mt-8 for spacing on small screens when this column shifts */}
            <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-3"> {/* Reduced from space-y-4 for tighter grouping */}
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">2261 Market Street STE 86773<br />San Francisco, CA 94114</span>
              </li>
              
              {/* Sales Contact */}
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="text-gray-400 text-sm font-medium">Sales:</span>
                  <div className="text-gray-400 text-sm">
                    US: +1 (415) 915 7065<br />
                    IND: +91 962 962 7092
                  </div>
                </div>
              </li>
              
              {/* Support Contact */}
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <span className="text-gray-400 text-sm font-medium">Support:</span>
                  <div className="text-gray-400 text-sm">
                    +1 (415) 200 5240
                  </div>
                </div>
              </li>
              
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 text-sm">info@fielduo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-900 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-white">Subscribe to our newsletter</h4>
              <p className="text-gray-400 text-sm">Get the latest updates and news</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 w-full md:w-64"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Fielduo. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#top" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#top" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#top" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;


