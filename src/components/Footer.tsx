import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          © 2024 Kotodama AI. All rights reserved.{" "}
          <a href="/terms" className="text-pulse-500 hover:underline">
            Terms of Service
          </a>
          {" | "}
          <a href="/privacy" className="text-pulse-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>;
};
export default Footer;