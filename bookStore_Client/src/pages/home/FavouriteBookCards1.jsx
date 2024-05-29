
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from 'react-router-dom'
import { Card, CardContent } from "@/components/ui/card"
import { FaCartShopping } from "react-icons/fa6"



const FavouriteBookCards1 = ({ books, headline }) => {
    return (
        <div className="container">
            <div className="my-16 px-4 lg:px-24">
                <h2 className=" text-3xl sm:text-5xl text-center font-bold my-5 text-black">{headline}</h2>
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full"
                >
                    <CarouselPrevious />
                    <CarouselContent >
                        {books.map((book,) =>
                            <CarouselItem className="lg:basis-1/3 md:basis-1/2  w-[320px] h-[500px]">
                                <div className="p-1 flex flex-col">
                                    <Card >
                                        <Link to={`/book/${book._id}`} >
                                        <CardContent className="flex flex-col aspect-square items-center justify-center p-6 bg-blue-200">
                                            <div className=" relative">

                                                <img
                                                    src={book.imageURL}
                                                    alt={`Image for ${book.bookTitle}`}
                                                    className=" size-[350px]"
                                                    onLoad={() => console.log("Image loaded successfully")}
                                                    onError={() => console.error("Error loading image")}
                                                />
                                                <div className=" absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded" 
                                                >
                                                    <FaCartShopping className="size-4 text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3>{book.bookTitle}</h3>
                                                <p>{book.authorName}</p>

                                            </div>
                                            <div>
                                                <p>$10.00</p>
                                            </div>
                                        </CardContent>
                                        </Link>
                                    </Card>
                                </div>
                                <div></div>
                            </CarouselItem>
                        )}

                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default FavouriteBookCards1