
import reg from "../assets/caradom_deluxe.jpg"


export default function MembershipPage() {
  const Card = ({ children, className = "" }) => (
    <div className={`rounded-2xl shadow-md border-l-4 border-green-500 ${className}`}>{children}</div>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>{children}</div>
  );

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Cardamom Membership</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join our trusted Kerala cardamom community to access quality products, exclusive benefits, and premium services.
        </p>
      </section>

      {/* Membership Details */}
      <section id="details" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-green-700">Membership Details</h2>
        <div className="grid md:grid-cols-3 gap-6 ">
          {[
            {
              title: "Annual Membership",
              content: "Affordable yearly subscription with premium support and updates.",
            },
            {
              title: "Farmer Membership",
              content: "Special plans for Kerala cardamom farmers with exclusive tools.",
            },
            {
              title: "Business Membership",
              content: "For exporters, wholesalers, and cardamom trade businesses.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Membership Benefits */}
      <section id="benefits" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-green-700 ps-6">Membership Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg ps-6">
            {[
              "Access to premium cardamom market insights",
              "Verified Kerala cardamom suppliers & buyers",
              "Exclusive events, webinars & training",
              "Priority customer support",
              "Discounted pricing for bulk purchases",
              "Digital farmer tools & productivity analytics",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 text-xl mr-2">✔</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Registration Section */}
<section id="registration" className="py-16 px-6 lg:px-20">
  <h2 className="text-4xl font-semibold mb-2 text-green-700 text-center lg:text-left ps-12">
    Registration Form
  </h2>
   <p className="ps-12 ">Join the community</p>
  {/* SPLIT LAYOUT */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT — FORM */}
    <form className="grid gap-6 bg-white ps-12 ">
      <input
        type="text"
        placeholder="Full Name"
        className="p-3 w-full shadow rounded-xl focus:outline-none focus:ring-0 focus:border-transparent"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="p-3 w-full shadow rounded-xl focus:outline-none focus:ring-0 focus:border-transparent"
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="p-3 w-full shadow rounded-xl focus:outline-none focus:ring-0 focus:border-transparent"
      />
      <select
        className="p-3 w-full shadow rounded-xl focus:outline-none focus:ring-0 focus:border-transparent"
      >
        <option>Select Membership Type</option>
        <option>Annual Membership</option>
        <option>Farmer Membership</option>
        <option>Business Membership</option>
      </select>

      <button className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br text-white rounded-xl py-3 text-lg w-30">
        Submit
      </button>
    </form>

    {/* RIGHT — IMAGE */}
    <div className="flex justify-center lg:justify-end">
      <img
        src={reg}
        alt="Registration Illustration"
        className="w-full max-w-md rounded-2xl shadow-xl object-cover"
      />
    </div>

  </div>
  </section>

{/* Member Login */}
<section id="login" className="py-16 px-6 lg:px-20">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT — IMAGE */}
    <div className="flex justify-center lg:justify-start">
      <img
        src="your_login_image_here.jpg"
        alt="Login Illustration"
        className="w-full max-w-md rounded-2xl shadow-xl object-cover"
      />
    </div>

    {/* RIGHT — CONTENT */}
    <div className="ps-0 lg:ps-12">

      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-2 text-green-700 text-center lg:text-left ps-8">
        Member Login
      </h2>
      <p className="ps-8">learnmore</p>

      {/* LOGIN FORM */}
      <form className="grid gap-6  p-8 rounded-xl ">
        <input
          type="email"
          placeholder="Email Address"
          className="shadow rounded-xl p-3 w-full focus:outline-none focus:ring-0 focus:border-transparent"
        />

        <input
          type="password"
          placeholder="Password"
          className="shadow rounded-xl p-3 w-full focus:outline-none focus:ring-0 focus:border-transparent"
        />

        <button className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br text-white rounded-xl py-3 text-lg w-30">
          Login
        </button>
      </form>

    </div>

  </div>
</section>

    </div>
  );
}