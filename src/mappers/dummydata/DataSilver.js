import img1 from '../../assets/img1ProductModal.jpg'
import img2 from '../../assets/img2ProductModal.jpg'
import img3 from '../../assets/img3ProductModal.jpg'
import img4 from '../../assets/img4ProductModal.jpg'
import topPicksOne from '../../assets/topPicksOne.jpg'
import topPicksTwo from '../../assets/topPicksTwo.jpg'
import topPicksThree from '../../assets/topPicksThree.jpg'
import topPicksFour from '../../assets/topPicksFour.jpg'
const topPicksFive = "https://assets-cdn.stylori.com/552x276/images/homepage/Stylori_ Daisy Days.jpg"
//first banner image
export const carouselTop = [
    {
        settings: {
            dots: false,
            infinite: false,
            autoplay: false,
            
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
        },
        images: [
            {
                img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/CV+Stylroi+banner+1920+X+656.jpg",
                mobileImg: " https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/CV+Stylroi+mobile+banner+805+X+430.jpg",
                navigateUrl: "https://www.stylori.com/jewellery"
              },
              {
                img: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/Gold+C+stylori+-+-+1920x656+copy.jpg",
                mobileImg: "https://styloriimages.s3.ap-south-1.amazonaws.com/images/static/home/Gold+C+stylori+-805x430.jpg",
                navigateUrl: "https://www.stylori.com/goldcoins"
              },
        ],
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ."
    }] 
    
//square images
export const fadeImagessublist = [
    { img: `${img1}`, title: "EVERYDAY", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img2}`, title: "FOLKLORE", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img3}`, title: "CONTEMPORARY", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" },
    { img: `${img4}`, title: "TRADITIONAL", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "98.89789" }
]
//title for divider
export const titleContiner = ['TOP PICKS', 'FEATURED', 'TESTIMONIALS']
//top pic container
export const TopPicksimages = [
    { img: topPicksOne, title: "Pretty Adonments Silver Pendant", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "5800" },
    { img: topPicksTwo, title: "FOLKLORE", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "3200" },
    { img: topPicksThree, title: "CONTEMPORARY", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "2000" },
    { img: topPicksFour, title: "TRADITIONAL", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "800" },
    { img: topPicksFive, title: "TRADITIONAL", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ", price: "900" }
]
export const collectionGrid =  [
    {
      img:
        "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-ring-tile.png",
      navigateUrl: "/rings-jewellery?sort=latest"
    },
    {
      img:
        "https://assets.stylori.com/images/Static+Pages/Home+Page/mangocollection.png",
      navigateUrl: "/jewellery-from+the+summer+collection?sort=latest"
    },
    {
      img:
        "https://assets.stylori.com/images/Static+Pages/Home+Page/Hallo+Collection_Website-01.png",
      navigateUrl: "/jewellery-from+halo+collection"
    },
    {
      img:
        "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori_+Daisy+Days.png",
      navigateUrl: "/jewellery-from+daisy+days+collection?sort=latest&page=4"
    },
    {
      img: "https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.png",
      navigateUrl: "/jewellery-blush"
    }
  ]
//feature container
export const FeaturedCarousel = [
    {
        settings: {
            dots: true,
            infinite: true,
            autoplay: false,
            speed: 2000,
            fade: false,
            arrows: false,
            dotsClass: "featureCarousel",
        },
        images:
            [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
            ]
    }
]
//Testimony container
export const testimonyCarousel = [
    {
        settings: {
            dots: true,
            infinite: true,
            autoplay: false,
            speed: 1000,
            fade: false,
            arrows: false,
            dotsClass: "featureCarousel",
        },
        images: [{
            Content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
            name: "Selvan",
            location: 'Chennai'
        },
        {
            Content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
            name: "Baskar",
            location: 'Chennai'
        },
        {
            Content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
            name: "Avinash avi",
            location: 'Chennai'
        }]
    }]
