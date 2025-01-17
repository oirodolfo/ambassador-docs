import { Link } from 'gatsby';
import React from 'react';

import Card from '../../../src/components/Card';
import Icon from '../../../src/components/Icon';
import { goToCloudQuickStart } from '../../../src/utils/routes';

import { CloudCards } from './config';

const Cloud = () => (
  <section className="docs__started docs__container product-page">
    <h1 className="docs__heading-primary docs__heading-primary--aligned">
      <Icon name="cloud" className="docs__cloud-icon" /> Cloud
    </h1>
    <p>Your central dashboard for all Ambassador tools.</p>
    <Link to={goToCloudQuickStart} className="docs__button-secondary docs__m-bottom-50">
      Get Started <Icon name="right-arrow" className="docs__button-secondary--arrow" />
    </Link>
    <div className={`docs__cards ${CloudCards.length === 1 ? 'docs__m-width-dekstop' : ''}`}>
      {CloudCards.map(c => (
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

export default Cloud;