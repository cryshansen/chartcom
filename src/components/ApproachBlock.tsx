export default function ApproachBlock() {
    return (
          <section className="page_block container mt-5 px-4 py-5 last_block">
            <div className="workshop_section row">
              <div className="col-md-6"> <img src="../images/looking_glass_sm.jpg" className="medium" alt="Looking Glass" /></div>
              <div className="textarea_block col-md-6">
                <h2>Approach is Everything</h2>
                <p>
                  Whether one is talking to clients, partnerships, collaborating in photographer group,
                  communicating to models on shoot, creative processes and think tanks come alive...
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  Lets Chat today!
                </button>
              </div>
            </div>
          </section>
        );
    }