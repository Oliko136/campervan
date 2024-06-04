import { GalleryList, GalleryItem } from "./Gallery.styled";

const Gallery = ({ gallery, alt }) => {
    const items = gallery.map(item =>
        <GalleryItem key={`${item.indexOf}_${alt}`}>
            <img src={item} alt={alt} />
        </GalleryItem>);
    
    return (
        <GalleryList>
            {items}
        </GalleryList>
    )
}

export default Gallery;