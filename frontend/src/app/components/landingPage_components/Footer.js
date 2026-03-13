export default function Footer() {
  return (
    <footer className="text-white py-10 sm:py-20 px-2 sm:px-1">
      <div className="px-7 pl-15 max-lg:px-3 max-lg:pl-7 flex flex-col sm:flex-row justify-center gap-10 max-lg:gap-7 text-center sm:text-left sm:items-start">

        {/* Logo Section */}
        <div className="flex-2 mb-8 hidden sm:block">
          <img 
            src="/images/logo/logo.svg" 
            alt="Comment's Fusion Logo" 
            className="w-40 sm:mx-0 mx-auto mb-2" 
          />
          <p className="text-sm text-white/80 mb-2">Comments with solution</p>
          <p className="mt-4 text-sm text-white/90">
            Stay ahead with AI-powered commenting!
          </p>
          <p className="text-sm text-white/70 mt-2 leading-relaxed">
            Transform your social interactions with smart, personalized, and engaging responses that drive meaningful conversations.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-white/30 h-65" />
        <div className="sm:hidden w-full h-px bg-white/20 my-4" />

        {/* Contact Info */}
        <div className="flex-1 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4">Contact information</h3>
          <p className="text-sm">Phone:</p>
          <p className="text-sm mb-4">+923289603143</p>
          <p className="text-sm">Mail:</p>
          <p className="text-sm mb-4">info@commentsfusion.com</p>
          <p className="text-sm">Address:</p>
          <p className="text-sm">NICAT, ALPHA-11, NASTP</p>
          <p className="text-sm">Monday - Friday</p>
          <p className="text-sm">8:00am - 5:00pm</p>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-white/30 h-65" />
        <div className="sm:hidden w-full h-px bg-white/20 my-4" />

        {/* Legals */}
        <div className="flex-1 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4">Legals</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms">Terms & Condition</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/returns">Return & Refund</a></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-white/30 h-65" />
        <div className="sm:hidden w-full h-px bg-white/20 my-4" />

        {/* Quick Links */}
        <div className="flex-1 px-4 mb-8">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        {/* Mobile Logo Section */}
        <div className="flex-1 px-4 mb-8 sm:hidden text-center">
          <img
            src="/images/logo/logo.svg"
            alt="Comment's Fusion Logo"
            className="w-36 mx-auto mb-2"
          />
          <p className="text-sm text-white/80 font-semibold">Smart Commenting</p>
          <p className="text-[16px] text-white/70 leading-snug mt-1">
            AI-crafted replies that spark better conversations on the go.
          </p>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-xs sm:text-sm text-white/60 text-center gap-3 px-2">
        <p>© 2025 Comments Fusion. All rights reserved.</p>
        <p>
          Design & Develop by{" "}
          <span className="text-white">Konquer Solution Pvt Ltd</span>
        </p>
      </div>
    </footer>
  );
}
