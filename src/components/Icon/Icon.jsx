import sprite from '../../assets/icons/sprite.svg';

const Icon = ({ width, height, fill, name }) => {
    return (
        <svg width={width} height={height} fill={fill}>
            <use href={`${sprite}#${name}`}/>
        </svg>
    )
}

export default Icon;