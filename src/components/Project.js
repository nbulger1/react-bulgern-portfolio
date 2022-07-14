import React, { useState } from "react";

export default function Project(props) {
  return (
    <div className="container">
      <article className="work" id="work">
        <section className="card-column-header">
          <figure>
            <h2 className="card-header">Work</h2>
          </figure>
        </section>
        {props.projects.map((item) => (
          <section className="card-column-1" key={item.id}>
            <figure className="card-1">
              <div className="card-text-1">
                <h2 className="card-header">{item.title}</h2>
                <a
                  className="card-body-link"
                  href={item.deployed_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Deployed Project
                </a>
                <a
                  className="card-body-link"
                  href={item.git_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to Github Repository
                </a>
              </div>
            </figure>
          </section>
        ))}
      </article>
    </div>
  );
}
