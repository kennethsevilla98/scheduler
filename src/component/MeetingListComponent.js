import {useHistory} from 'react-router-dom'
import moment from 'moment'

function MeetingListComponent({meeting}) {

    const history = useHistory()

    const onClickMeeting = ()=>{
        history.push(`/update/${meeting.id}`)
    }

    var borderColor;

    if(meeting.status==='Done') borderColor='border-red-400'
    if(meeting.status==='On-going') borderColor='border-green-400'
    if(meeting.status==='Pending') borderColor='border-yellow-200'

    return (
        <div className={`p-4 shadow mt-3 cursor-pointer bg-white rounded-lg border-l-4 ${borderColor}`}  onClick={onClickMeeting}> 
            <h2 className='text-left text-xl '>{meeting.title}</h2>
                <div className='flow-root'>
                <p className='float-left font-bold'>{meeting.status}</p>
                <p className='float-right'>{moment(meeting.date).format('MMMM DD, YYYY')}</p>
                </div>
        </div>
    )
}

export default MeetingListComponent
