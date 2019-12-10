import img1 from '../../assets/img1ProductModal.jpg'
import img2 from '../../assets/img2ProductModal.jpg'
import img3 from '../../assets/img3ProductModal.jpg'
import img4 from '../../assets/img4ProductModal.jpg'
import topPicksOne from '../../assets/topPicksOne.jpg'
import topPicksTwo from '../../assets/topPicksTwo.jpg'
import topPicksThree from '../../assets/topPicksThree.jpg'
import topPicksFour from '../../assets/topPicksFour.jpg'
import topPicksFive from '../../assets/topPicksFive.jpg'

const dataCarousel = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    arrows: false
}

export const fadeImagessublist = [
    { img: `${img1}`, title: "EVERYDAY", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img2}`, title: "FOLKLORE", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img3}`, title: "CONTEMPORARY", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img4}`, title: "TRADITIONAL", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" }
]

export const titleContiner = ['TOP PICKS', 'FEATURED', 'TESTIMONIALS']



const Featured = [topPicksOne, topPicksTwo, topPicksThree, topPicksFour, topPicksFive]
export const TopPicksimages = [{ topPicksOne, topPicksTwo, topPicksThree, topPicksFour, topPicksFive }]

export const FeaturedCarousel = [{ settings: dataCarousel, images: Featured }]