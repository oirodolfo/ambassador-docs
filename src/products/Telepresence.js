import { Link } from 'gatsby';
import React from 'react';

import Card from '../../../src/components/Card';
import Icon from '../../../src/components/Icon';
import { goToTelepresenceQuickStart } from '../../../src/utils/routes';

import { TelepresenceCards } from './config';

const Telepresence = () => (
  <section className="docs__started docs__container product-page">
    <h1 className="docs__heading-primary docs__heading-primary--aligned">
      <Icon name="telepresence-icon" /> Telepresence
    </h1>
    <p>Code and test microservices locally against a remote Kubernetes cluster.</p>
    <Link to={goToTelepresenceQuickStart} className="docs__button-secondary docs__m-bottom-50">
      Get Started <Icon name="right-arrow" className="docs__button-secondary--arrow" />
    </Link>
    <div className="docs__cards">
      {TelepresenceCards.map(c => (
        <Card
          key={c.title}
          title={c.title}
          description={c.description}
          link={c.link}
          linkText={c.linkText}
          icon={c.icon}
        />
      ))}
    </div>
  </section>
);

export default Telepresence;