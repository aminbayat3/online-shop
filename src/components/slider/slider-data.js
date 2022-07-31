import { v4 as uuidv4 } from "uuid";

export const SLIDER_DATA = [
    {
        id: uuidv4(),
        imageUrl: `${process.env.PUBLIC_URL}/imgs/image1.png`,
    },
    {
        id: uuidv4(),
        imageUrl:`${process.env.PUBLIC_URL}/imgs/image2.png`,
    },
    {
        id: uuidv4(),
        imageUrl: `${process.env.PUBLIC_URL}/imgs/image3.png`,
    },
    {
        id: uuidv4(),
        imageUrl: `${process.env.PUBLIC_URL}/imgs/image4.png`,
    },
    {
        id: uuidv4(),
        imageUrl: `${process.env.PUBLIC_URL}/imgs/image5.png`,
    }

]