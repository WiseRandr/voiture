import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as C } from "react-responsive-carousel";

export default function Carousel(props: any) {
  return <C showThumbs={false} showStatus={false} {...props} />;
}