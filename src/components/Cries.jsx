import VolumeUpIcon from '@mui/icons-material/VolumeUp';



export default function PlayCries (props) {

    const {PlayAudio} = props;

    return(
        <>
            
            <VolumeUpIcon className='audioEL' onClick={PlayAudio}/>
        </>
    );
}