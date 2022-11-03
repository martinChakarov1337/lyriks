import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {DetailsHeader,Error,Loader,RelatedSongs} from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);

    const {data: artistData, isFetching:isFetchingArtistDetails ,error} = useGetArtistDetailsQuery({artistId});

    console.log(Object.values(artistData?.songs))

    if (isFetchingArtistDetails){
        <Loader title="Loading artist details" />;
    }

    if (error){
        <Error />;
    }

    return (
        <div className="flex flex-col">
          <DetailsHeader artistId={artistId} artistData={artistData} />
          <RelatedSongs
           artistId={artistId}
           data={Object.values(artistData?.songs)}
           activeSong={activeSong}
           isPlaying={isPlaying}
           />
        </div>
    )
}

export default ArtistDetails;
