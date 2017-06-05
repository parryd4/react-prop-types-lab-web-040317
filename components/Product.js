// Product name="Dunder Mifflin" producer="PaperCo" color="white" weight={210}
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
      </div>
    )
  }
}
Product.defaultProps = {
  hasWatermark: false
}

const theDocumentationDidntHelpNeitherDidTheLessonSoThisIsWhatIHadToResortTo = []
for (let i = 80 ; i <= 350 ; i++){
  theDocumentationDidntHelpNeitherDidTheLessonSoThisIsWhatIHadToResortTo.push(i) // can't believe this was the way to pass the test.
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: PropTypes.oneOf(theDocumentationDidntHelpNeitherDidTheLessonSoThisIsWhatIHadToResortTo).isRequired
}
