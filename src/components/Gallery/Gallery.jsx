const Gallery = ({ gallery, alt }) => {
    try {
        console.log('Rendering Gallery with gallery: ', gallery);
        return (
            <div>
                {gallery.map((image, index) => (
                    <img key={index} src={image} alt={alt} />
                ))}
            </div>
        );
    } catch (error) {
        console.error("Error in Gallery component: ", error);
        return <div>Failed to load gallery</div>;
    }
}
/*
    const items = gallery.map(item =>
        <li key={item.indexOf}>
            <img src={item} alt={alt} />
        </li>);
    return (
        <ul>
            {items}
        </ul>
    )
}*/

export default Gallery;