import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item" key={item}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

        <div className="row certification">
          <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.certification && resumeData.certification.map((item) => {
                return (
                  <div className="row item center">
                    <h3>{item.certificationName}</h3>
                    <div className="twelve columns header-col">
                      <p className="info">
                        {item.issuedBy}
                        <span>&bull;</span> <em className="date"> {item.certificationDate}</em></p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      // file deepcode ignore ReactMissingArrayKeys: <please specify a reason of ignoring this>
                      <li>
                        <span className={` bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

      </section>
    );
  }
}