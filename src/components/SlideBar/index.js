import SlideItem from '../SlideItem'
import './index.css'

const SlideBar = props => {
  const {
    initialSlidesList,
    activeSlide,
    updateActiveSlide,
    updateInitialSlidesList,
  } = props

  const onClickedNew = () => {
    const newSlide = {
      heading: 'Heading',
      description: 'Description',
    }
    updateInitialSlidesList(newSlide)
  }

  return (
    <div className="slide-main-container">
      <button type="button" className="new-button" onClick={onClickedNew}>
        + New
      </button>
      {initialSlidesList.map(eachSlide => (
        <SlideItem
          eachSlide={eachSlide}
          key={eachSlide.id}
          number={initialSlidesList.indexOf(eachSlide)}
          isActive={activeSlide.id === eachSlide.id}
          updateActiveSlide={updateActiveSlide}
        />
      ))}
    </div>
  )
}

export default SlideBar
