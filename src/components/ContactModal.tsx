export default function ContactModal(){

    return(
      <div
        className="modal fade"
        id="contactModal"
        tabIndex={-1}
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 id="contactModalLabel" className="modal-title">Send a message.</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="message" style={{ color: "green" }}></div>
              
    
              <form id="modal-contact-form" role="form" method="POST" action="">
                {/* Token - handle dynamically or via hidden input */}
                <input type="hidden" name="_token" value="" />
    
                <div className="input-group">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="fullname">Full Name</label>
                    <div>
                      <input
                        id="fullname"
                        type="text"
                        className="form-control input-lg"
                        name="fullname"
                        placeholder="Jane Smith"
                        required
                      />
                      <span className="error" id="fullname-error"></span>
                    </div>
                  </div>
    
                  <div className="col-md-6 m-0">
                    <label className="control-label" htmlFor="phone">Phone</label>
                    <div>
                      <input
                        id="phone"
                        type="text"
                        className="form-control input-lg"
                        name="phone"
                        placeholder="213-123-4567"
                        required
                      />
                      <span className="error" id="phone-error"></span>
                    </div>
                  </div>
                </div>
    
                <div className="form-group">
                  <label className="control-label" htmlFor="email">E-Mail Address</label>
                  <div>
                    <input
                      id="email"
                      type="email"
                      className="form-control input-lg"
                      name="email"
                      placeholder="happy@example.com"
                      required
                    />
                    <span className="error" id="email-error"></span>
                  </div>
                </div>
    
                <div className="form-group">
                  <label className="control-label" htmlFor="subject">Subject</label>
                  <div>
                    <input
                      id="subject"
                      type="text"
                      className="form-control input-lg"
                      name="subject"
                      placeholder="Looking for a Beauty photo session"
                      required
                    />
                    <span className="error" id="subject-error"></span>
                  </div>
                </div>
    
                <div className="form-group">
                  <label className="control-label" htmlFor="textbox_msg">Collaborate:</label>
                  <div>
                    <textarea
                      id="textbox_msg"
                      maxLength={500}
                      className="form-control input-lg"
                      name="textbox_msg"
                      placeholder="I want to book a beauty session, can we talk concepts? I'm looking for a dreamy scene with snow white feel."
                      required
                    ></textarea>
                    <span className="error" id="textbox_msg-error"></span>
                  </div>
                </div>
    
                <div id="captcha1">
                </div>
              </form>
            </div>
    
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="send" type="button" className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    )
}