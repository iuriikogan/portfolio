import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:
                  {" "+resumeData.linkedinId}
                </h4>
                <h4>Email:
                  {" "+resumeData.emailId}
                </h4>
              <h4>Phone:
                  {" "+resumeData.phoneNum}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}