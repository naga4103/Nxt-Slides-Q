import './index.css'

const SlideItem = props => {
  const {eachSlide} = props
  return (
    <div className="slide-item-bg-container">
      <div className="slide-item-row-container">
        <p className="slide-item-number">1</p>
        <div className="slide-item-card-container">
          <h1 className="slide-item-heading">{eachSlide.heading}</h1>
          <p className="slide-item-para">{eachSlide.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SlideItem
