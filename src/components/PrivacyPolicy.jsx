import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const orgName =
    "Idukki Mahila Cardamom Producer Company Limited. (IMCPC)";
  const lastUpdated = "May 1, 2025";
  const contactEmail = "info@imcpc.com";
  const contactPhone = "[Phone Number]";
  const address = "Idukki, Kerala – [PIN Code]";
  const brandColor = "#6B8E23";

  return (
    <section className="py-20 px-6 md:px-24 bg-white">

      <div>
               <Link to="/" className="text-black hover:underline">
  Back to Home
</Link>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1
            className="text-3xl md:text-4xl pt-20 font-extrabold"
            style={{ color: brandColor }}
          >
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-700">
            This Privacy Policy explains how <strong>{orgName}</strong> collects
            and uses information when you visit our website or use our services.
            We respect your privacy and handle your information responsibly.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        {/* How We Collect Information */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            How We Collect Information from You
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As a data controller, <strong>{orgName}</strong> collects
            information when you interact with our site and services. This
            includes:
          </p>

          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
            <li>
              <strong>Information you provide:</strong> name, phone, email,
              messages, membership details, and uploaded documents.
            </li>
            <li>
              <strong>Automatic data:</strong> IP address, device/browser info,
              visited pages, analytics.
            </li>
            <li>
              <strong>Third-party data:</strong> verification or service-related
              inputs.
            </li>
          </ul>

          <p className="text-gray-700 mt-3">
            We do <strong>not</strong> collect biometric or GPS-based location
            data.
          </p>
        </section>

        {/* Usage */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
            <li>Membership handling and updates.</li>
            <li>Auction-related notifications & scheduling.</li>
            <li>Responding to inquiries.</li>
            <li>Improving user experience.</li>
            <li>Legal compliance.</li>
          </ul>
        </section>

        {/* Sharing */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell personal information. Limited sharing may occur only
            when necessary:
          </p>

          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-1">
            <li>Internal teams for service processing.</li>
            <li>Trusted service providers.</li>
            <li>Banks or payment processors.</li>
            <li>Government authorities as required by law.</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to enhance performance and improve user experience.
            You can disable cookies in your browser, but some features may not
            work correctly.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            Data Retention & Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain personal data only as long as needed. We use reasonable
            safeguards, but no system is fully secure. Contact us if you suspect
            misuse.
          </p>
        </section>

        {/* Rights */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            Your Rights
          </h2>
          <p className="text-gray-700">
            You may request access, correction, or deletion of your data.
            Contact us for assistance.
          </p>
        </section>

        {/* Children */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            Children
          </h2>
          <p className="text-gray-700">
            Our services are not intended for children under 16. If you believe
            we collected such data, contact us immediately.
          </p>
        </section>

        {/* Links */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            Links to Other Sites
          </h2>
          <p className="text-gray-700">
            External links may appear on our site. We are not responsible for
            other websites’ privacy policies.
          </p>
        </section>

        {/* Policy Changes */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: brandColor }}
          >
            Changes to This Policy
          </h2>
          <p className="text-gray-700">
            Updates will be posted on this page with a revised date.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: brandColor }}
          >
            Contact Us
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="font-semibold text-gray-800">{orgName}</p>
            <p className="mt-2 text-gray-700">
              <strong>Address:</strong> {address}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Phone:</strong> {contactPhone}
            </p>

            <p className="mt-2 text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#6B8E23]"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </section>

        <footer className="text-sm text-gray-500 text-center mt-6">
          © {new Date().getFullYear()} {orgName}. All rights reserved.
        </footer>
      </div>
      <div>
       


      </div>
    </section>
  );
};

export default PrivacyPolicy;


