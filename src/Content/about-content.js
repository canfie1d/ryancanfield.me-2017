import React    from 'react';
import Button   from '../Components/buttons/button';

export default class AboutContent extends React.Component {

  componentDidMount() {
    var component = this.domNode;

    component.style.opacity = 0;
    window.requestAnimationFrame(() => {
      component.style.transition = 'opacity 2500ms';
      component.style.opacity = 1;
    });

  }

  render() {
    return (
      <main className='page__content page__content--p-width' ref={(main) => { this.domNode = main; }}>
        <h2 className='page__subtitle'>Work</h2>
        <p className='page__p'>
          Currently, I specialize in user interface design & front-end development at <a target='_blank' rel='noopener noreferrer' href='http://helpfulhuman.com' className='page__inline-a'>Helpful Human</a>. Previously, I was a UI engineer at <a target='_blank' rel='noopener noreferrer' href='http://www.synapsestudios.com' className='page__inline-a'>Synapse Studios</a> and prior to that, I was a designer for the <a target='_blank' href='http://www.azstatefair.com' rel='noopener noreferrer' className='page__inline-a'>Arizona State Fair</a> in Phoenix, AZ.
        </p>
        <h2 className='page__subtitle'>Education</h2>
        <p className='page__p'>
          I earned a Bachelors of Fine Arts in Graphic Design from Collins College in 2012. Prior to that, in 2010, I earned an Associates in Information Technology from Bryant & Stratton College in New York. In addition to my traditional graphic design education, I'm extremely comfortable with HTML, CSS(SCSS) & Javascript.
        </p>
        <h2 className='page__subtitle'>Tooling</h2>
        <p className='page__p'>
          I use an assortment of tools such as Sketch &amp; inVision to wireframe, mock, and prototype designs in order to qualify design direction and user flows before moving to code.
        </p>
        <p className='page__p'>
          I am very accustomed to using agile development methodology including daily stand-up, sprint based development cycles, and iterative and incremental development. I am comfortable with complex git workflows as well as kanban style issue tracking services.
        </p>
        <Button
          className='download-button'
          element='a'
          target='_blank'
          href='https://s3-us-west-2.amazonaws.com/ryancanfield.me-docs/R_Canfield_Resume_2016.pdf'
          color='white'
        >
            View Résumé PDF
        </Button>
      </main>
    );
  }
};
