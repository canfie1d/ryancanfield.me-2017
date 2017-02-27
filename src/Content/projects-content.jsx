import React       from 'react';
import ReactDOM    from 'react-dom';
import { connect } from 'react-redux';
import Display     from '../Components/display/display';
import List        from '../Components/list/list';

let getPropsFromApplicationState = (state) => {
  return {
    browser : state.browser
  };
};

const CLIENTS = [
  {
    title : 'eBay Enterprise',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/ebay-enterprise.png',
    url   : ''
  },
  {
    title : 'Blue Cross Blue Shield',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/bcbs.png',
    url   : ''
  },
  {
    title : 'Arizona State University',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/asu.png',
    url   : 'http://pat.usmexpat.com'
  },
  {
    title : 'University of Arizona',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/UofA.png',
    url   : 'http://researchaz.org'
  },
  {
    title : 'Northern Arizona University',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/nau.png',
    url   : 'http://researchaz.org'
  },
  {
    title : 'Hotelogical',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/hotelogical.png',
    url   : 'http://hotelogical.com'
  },
  {
    title : 'Hotels Ugogo',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/hotels-ugogo.png',
    url   : 'http://hotelsugogo.com'
  },
  {
    title : 'TruTankless',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/trutankless.png',
    url   : 'http://trutankless.com'
  },
  {
    title : 'BodeTree',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/bodetree.png',
    url   : 'http://bodetree.com'
  },
  {
    title : 'Beacon ID',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/beacon-id.png',
    url   : ''
  },
  {
    title : 'Puppies.com',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/puppies.png',
    url   : 'http://puppies.com'
  },
  {
    title : 'High Above',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/highabove.png',
    url   : 'http://highabove.net'
  },
  {
    title : 'Carnival Cruiselines',
    image : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/clients/carnival.png',
    url   : 'http://ocean.com'
  }
];

const PROJECTS = [
  {
    title  : 'Hotelogical',
    id     : 1,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/results.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/map.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/details.png'
      }
    ],
  },
  {
    title  : 'Synapse Studios',
    id     : 2,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/home2.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/who.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/benefits.png'
      }
    ],
  },
  {
    title  : 'USMexPat',
    id     : 3,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/menu.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/gdp.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/form.png'
      }
    ]
  },
  {
    title  : 'TruTankless',
    id     : 4,
    images : [
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/login.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/home.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/dashboard.png'
      },
      {
        url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/form.png'
      }
    ]
  }
];

const ProjectsContent = connect(getPropsFromApplicationState)(React.createClass({

  displayName: 'ProjectsContent',

  componentDidMount() {
    var component = ReactDOM.findDOMNode(this);

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });
  },

  renderDisplay() {
    if (this.props.browser.greaterThan.mediumSmall) {
      return (
        <Display projects={PROJECTS} />
      );
    }
  },

  renderSubtitle() {
    if(this.props.browser.greaterThan.mediumSmall) {
      return (
        <h2 className='page__subtitle'>Clients</h2>
      );
    }
  },

  render() {
    return (
      <main className='page__content'>
        {this.renderDisplay()}
        {this.renderSubtitle()}
        <List listItems={CLIENTS} />
      </main>
    );
  },

}));

export default ProjectsContent;
