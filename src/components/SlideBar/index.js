import SlideItem from '../SlideItem'
import './index.css'

const SlideBar = props => {
  const {initialSlidesList} = props
  return (
    <div className="slide-main-container">
      <button type="button" className="new-button">
        + New
      </button>
      {initialSlidesList.map(eachSlide => (
        <SlideItem eachSlide={eachSlide} key={eachSlide.id} />
      ))}
    </div>
  )
}
export default SlideBar
