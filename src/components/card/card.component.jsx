import './card.component.scss'
import { IMG_CDN_LINK } from '../../config'
export const Card=(props)=>{
    const {name,cloudinaryImageId,avgRating,slaString,costForTwoString,cuisines}=props
    return (
        
        <div className="card">
            <div className="card__img-container">
                 <img className='card__img' src={`${IMG_CDN_LINK}${cloudinaryImageId}`} alt="Resturant Thumbnail" />
            </div>
            <div className="card__details">
                <h4 className="card__header">
                    {name?.length>25 ? `${name?.substr(0,25)}...` : name}
                </h4>
                <p className="card__sub-header">
                    {cuisines.join(' , ')?.length>50 ? `${cuisines.join(' , ')?.substr(0,50)}..` : cuisines.join(' , ')}
                </p>
                <ul className=''>
                    <li>{avgRating}</li>
                    <li>{slaString}</li>
                    <li>{costForTwoString}</li>
                </ul>
            </div>
        </div>
    )
}