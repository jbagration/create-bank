export type SliderSlickProps = {
    children: JSX.Element[]
    settings: Settings
}

type Settings = {
    dots?: boolean
    infinite?: boolean
    speed?: number
    arrows?: boolean
    slidesPerRow?: number
    slidesToShow?: number
    slidesToScroll?: number
    rows?: number
}
