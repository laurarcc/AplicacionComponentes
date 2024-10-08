import {Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
function Testimonio({name, country, profession, description, imageUrl, imageSize}) {
    const [isFavorited, setIsFavorited] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited((prev) => !prev);
    };

    return (
        <>
            <div>
                <Card size={'auto'}>
                    <CardActionArea>
                        <CardMedia
                            src={imageUrl}
                            alt={'imagen'}
                            sx={{width:imageSize, height:imageSize}}>
                        </CardMedia>
                        <CardContent>
                            <Typography variant='h2'>{name} en {country}</Typography>
                            <Typography variant='h3'>{profession}</Typography>
                            <Typography>{description}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton>
                            <IconButton onClick={toggleFavorite}>
                                {isFavorited ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                            </IconButton>
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default Testimonio
