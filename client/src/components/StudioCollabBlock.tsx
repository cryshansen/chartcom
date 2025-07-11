export default function StudioCollabBlock () {

  const handleOpenModal = () => {
  const email = (document.getElementById("contact-email") as HTMLInputElement)?.value;
  const message = (document.getElementById("contact-message") as HTMLTextAreaElement)?.value;

  window.dispatchEvent(
    new CustomEvent("prefillContactModal", {
      detail: { email, message },
    })
  );
};

  return (
      <div className="container">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Collaborate on Studio Shoots
            </h1>
            <p className="col-lg-10 fs-4">Benefits of connecting:</p>
            <ul>
              <li>Need a place to shoot?</li>
              <li>Want to hang out with other photographers?</li>
            </ul>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <div id="cmessage"></div>
            <form
              id="contact-form"
              className="p-4 p-md-5 border rounded-0 bg-body-tertiary"
              method="POST"
              action=""
            >
              <div className="mb-3">
                <label htmlFor="contact-email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="contact-email"
                  placeholder="name@example.com"
                />
                <span className="error" id="contact-email-error"></span>
              </div>
    
              <div className="mb-3">
                <label htmlFor="contact-message" className="form-label">
                  Tell us more about your collab...
                </label>
                <textarea
                  className="form-control"
                  id="contact-message"
                  rows={3}
                ></textarea>
                <span className="error" id="contact-message-error"></span>
              </div>
    
              <button
                id="contactus"
                className="w-100 btn btn-lg btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
                type="button"
                onClick={handleOpenModal}
              >
                Contact Us
              </button>
    
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Contact Us, you agree to the{" "}
                <a href="terms-of-use.html" title="Terms of Use">
                  terms of use
                </a>
                .
              </small>
            </form>
          </div>
        </div>
      </div>
  )
}
