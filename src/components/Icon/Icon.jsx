import sprite from '../../assets/icons/sprite.svg';

const Icon = ({ width, height, fill, stroke, name }) => {
    return (
        <svg width={width} height={height} fill={fill} stroke={stroke}>
            <use href={`${sprite}#${name}`}/>
        </svg>
    )
}

export default Icon;