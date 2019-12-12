import img1 from '../../assets/img1ProductModal.jpg'
import img2 from '../../assets/img2ProductModal.jpg'
import img3 from '../../assets/img3ProductModal.jpg'
import img4 from '../../assets/img4ProductModal.jpg'
import topPicksOne from '../../assets/topPicksOne.jpg'
import topPicksTwo from '../../assets/topPicksTwo.jpg'
import topPicksThree from '../../assets/topPicksThree.jpg'
import topPicksFour from '../../assets/topPicksFour.jpg'
// import topPicksFive from '../../assets/topPicksFive.jpg'
import FlowerDimon from "../../assets/FlowerDimon.jpg";
import closeheart from "../../assets/closeheart.jpg";
import nosepin from "../../assets/nosepin.gif";
import carosul from 'components/Carousel/carosul';


const topPicksFive = "https://assets-cdn.stylori.com/552x276/images/homepage/Stylori_ Daisy Days.jpg"
const dataCarousel = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    fade: false,
    arrows: false
}
const dataCarouselFeature = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    fade: false,
    arrows: false,
    dotsClass: "featureCarousel",
}

const datacaroTestimony = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    fade: false,
    arrows: false,
    dotsClass: "featureCarousel",
}
export const fadeImagessublist = [
    { img: `${img1}`, title: "EVERYDAY", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img2}`, title: "FOLKLORE", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img3}`, title: "CONTEMPORARY", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img4}`, title: "TRADITIONAL", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" }
]

export const titleContiner = ['TOP PICKS', 'FEATURED', 'TESTIMONIALS']



const Featured = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
]
const carouseldata = [
    FlowerDimon,
    closeheart,
    nosepin,
]
const TopcaroselSetting = {

    dots: false,
    infinite: false,
    autoplay: false,
    speed: false,
    fade: false,
    arrows: false,
    arrowsImg: false,
    dotsClass: "slickdev",
    accessibility: false,
    centerMode: false,
    focusOnSelect: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    swipe: false
}
const topcontent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ."

const testimonycarodata = [{
    Content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    name: "Selvan RadhaKrishnan",
    location: 'Chennai'
},
{
    Content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
    name: "Baskar Radhakrishnan",
    location: 'Chennai'
},
{
    Content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
    name: "Avinash avi",
    location: 'Chennai'
}]

export const TopPicksimages = [{ topPicksOne, topPicksTwo, topPicksThree, topPicksFour, topPicksFive }]

export const FeaturedCarousel = [{ settings: dataCarouselFeature, images: Featured }]
export const testimonyCarousel = [{ settings: datacaroTestimony, images: testimonycarodata }]
export const carouselTop = [{ settings: TopcaroselSetting, images: carouseldata, content: topcontent }]