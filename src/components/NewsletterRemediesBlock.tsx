import { useEffect, useRef,useState } from "react";


const SITE_KEY = "6LchUBsrAAAAAEJe-JeaK_akOkeh-6eTwxFF5Gcx";

export default function NewsletterRemediesBlock() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const captchaRef = useRef<HTMLDivElement>(null);
  const [captchaId, setCaptchaId] = useState<number | null>(null);

  useEffect(() => {
    // Load reCAPTCHA script
    const scriptId = "recaptcha-key";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
      script.onload = renderCaptcha;
      document.body.appendChild(script);
    } else {
      renderCaptcha();
    }
  }, []);

  const renderCaptcha = () => {
    if (window.grecaptcha && captchaRef.current && captchaId === null) {
      const id = window.grecaptcha.render(captchaRef.current, {
        sitekey: SITE_KEY,
      });
      setCaptchaId(id);
    }
  };

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

    // Get reCAPTCHA response
    const gctoken = (document.getElementById("g-recaptcha-response") as HTMLInputElement)?.value;
    const token1 = window.grecaptcha?.getResponse(captchaId!);

    if (!token1) {
      setError("Please complete the captcha.");
      return;
    }

    const payload = {
      email,
      textbox_msg: "newsletter",
      gctoken,
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
    <section className="container py-5 my-5 bg-light  shadow">
      <div className="text-center mb-5">
        <h2 className="mb-3">🌿 Join Our Apothecary Remedies Newsletter</h2>
        <p className="text-muted">
          Get natural remedies, DIY recipes, and essential oil tips, wellness tips, botanical recipes, and product drops straight to your inbox.
        </p>
      </div>

      <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
         <form onSubmit={handleSubmit} className="text-center">
          <input
            type="email"
            className="form-control w-50 w-md-50"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           {error && <p className="text-danger mt-2">{error}</p>}
           <div ref={captchaRef} id="captcha3" className="d-flex justify-content-center mb-3" />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      </div>

      {message && (
        <p className="text-center mt-3 text-success fw-bold">
          {message}
        </p>
      )}
    </section>
  );
}
