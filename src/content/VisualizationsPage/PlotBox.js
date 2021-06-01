import React from 'react';

// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

const PlotSection = (props) => (
  <section className={`bx--row ${props.className} plot-section`}>
    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
      <h3 className="plot-section__heading">{props.heading}</h3>
    </div>
    {props.children}
  </section>
);

const PlotBox = (props) => {
  return (
    <article className="plot-box bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="plot-box__heading">
        {props.heading}
      </h4>
      <div className="plot-box__body">{props.body}</div>
    </article>
  );
};

export { PlotSection, PlotBox };
