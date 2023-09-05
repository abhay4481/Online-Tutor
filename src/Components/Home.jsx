import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Image, Heading, Stack, Text } from '@chakra-ui/react'
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'
import img4 from '../Assets/4.jpg'
import img5 from '../Assets/5.png'

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}

const Home = () => {
    return <Box>
        <MyCarousel />
        <Container maxW={"container.xl"} minH={"100vh"} p="16">
            <Heading textTransform={"uppercase"} py={"2"} w="fit-content" borderBottom={"2px solid"} m="auto">Services</Heading>
            <Stack
                h={'full'}
                p="4"
                alignItems={'center'}
                direction={['column', 'row']}
            >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni officia sunt nesciunt facere quam, voluptatem accusantium quod voluptatum ratione sit, perspiciatis tempore rerum recusandae dolores et atque obcaecati assumenda officiis libero, ea repellendus sapiente nobis! Explicabo sint doloribus repellendus! Neque, eum rerum. Vel eos minima deserunt error nesciunt quisquam ipsa ducimus accusantium maiores aliquam asperiores laboriosam fugit incidunt consectetur necessitatibus tenetur et, dolores aliquid magnam! Aspernatur, magni facere? Quos, officia voluptas deleniti modi porro dolorem mollitia veniam veritatis excepturi ex molestias rem aut, delectus voluptatum! Optio iste voluptatum quis quos corporis repellendus quod cumque accusamus non fugit natus tenetur laboriosam sunt, aspernatur facilis architecto, mollitia quo placeat incidunt ullam eos eligendi cupiditate exercitationem. Qui maiores ex illo tempora consequatur corporis mollitia quaerat esse commodi obcaecati, illum id incidunt dignissimos laudantium ducimus quis officiis hic aliquid soluta totam fugiat voluptates pariatur eius! Odio officia quod libero, maxime ut deleniti ratione dolorem!
                </Text>
            </Stack>
        </Container>
    </Box >
}

const MyCarousel = () => (
    <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} showArrows={false} interval={1000} >
        <Box w={"full"} h="100vh">
            <Image src={img1} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor="blackAlpha.600" color="white" {...headingOptions}>
                Watch the future
            </Heading>
        </Box>

        <Box w={"full"} h="100vh">
            <Image src={img2} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w={"full"} h="100vh">
            <Image src={img3} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w={"full"} h="100vh">
            <Image src={img4} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
                Night Life is Cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home
