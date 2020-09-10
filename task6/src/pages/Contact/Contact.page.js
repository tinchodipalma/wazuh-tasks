import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';

import './Contact.css';

const ContactPage = () => (
  <DefaultLayout>
    <div className="ContactPage__Row">
      <label className="ContactPage__Row__Label">Github:</label>
      <span className="ContactPage__Row__Value">
        <a
          href="https://github.com/tinchodipalma"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tinchodipalma
        </a>
      </span>
    </div>
    <div className="ContactPage__Row">
      <label className="ContactPage__Row__Label">LinkedIn:</label>
      <span className="ContactPage__Row__Value">
        <a
          href="https://linkedin.com/in/tinchodipalma"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tinchodipalma
        </a>
      </span>
    </div>
  </DefaultLayout>
);

export default ContactPage;
