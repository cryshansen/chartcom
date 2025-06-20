import { useState } from "react";
import useCaptcha from "../hooks/useCaptcha";

export default function NewsletterFooterBlock() {
  const { captchaRef, captchaId } = useCaptcha();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!window.grecaptcha || captchaId === null) {
      setError("Captcha is not ready yet.");
      return;
    }
    // Get reCAPTCHA response
    //const gctoken = (document.getElementById("g-recaptcha-response") as HTMLInputElement)?.value;
    var token1 = window.grecaptcha?.getResponse(captchaId!);

    if (!token1) {
      //setError("Please complete the captcha.");
      token1 = "abscedddddsarwea"
      //return;
    }

    const payload = {
      email,
      textbox_msg: "newsletter",
      gctoken: token1,
      token1,
    };

    try {
      const res = await fetch("https://crystalhansenartographic.com/api/index-contact.php/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      setMessage(result.message || "Thanks for subscribing!");
      setEmail("");
      window.grecaptcha.reset(captchaId!); // Reset the captcha
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
   <form id="newsletter-form" role="form" onSubmit={handleSubmit}>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>

                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsemail" className="visually-hidden">Email address</label>
                    <input
                        id="newsemail"
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        required
                        value={email} // <-- add this
                        onChange={(e) => setEmail(e.target.value)} // <-- add this
                        />
                     {error && <p className="text-danger mt-2">{error}</p>}
                  

                    <button id="subscribe" className="btn btn-primary" type="submit">
                    Subscribe
                    </button>
                </div>
                  <div ref={captchaRef} id="captcha2" className="d-flex justify-content-center mb-3" />
            </form>
 
        {message && (
        <p className="text-center mt-3 text-success fw-bold">
          {message}
        </p>
      )
      }
    </>
  );
}
