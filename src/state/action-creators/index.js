import axios from 'axios'

const url = '/meetings'

export const getMeetings = () => (dispatch) => {
    // User loading
    dispatch({type: "meeting_loading"});


   

                                //add token config
    axios.get(url)
        .then(res => dispatch ({
            type: "meeting_loaded",
            payload: res.data 
        }))
        .catch(err => {
            alert('error')    
        })
} 

export const postMeeting= (title,status,date) => (dispatch)=> {

    //headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    //Request body
    const body = JSON.stringify({title,status,date});


    axios
    .post(url,body,config)
    .then(res =>{
       dispatch(getMeetings())
    }).catch(err=>alert('error'))

}


export const deleteMeeting= (id) => (dispatch)=> {

    dispatch({type: "meeting_loading"});
    
    axios
    .delete(url+'/'+id)
    .then(res =>{
        dispatch(getMeetings())
    }).catch(err=>alert('error'))

}

export const updateMeeting = (id,title,status,date) => (dispatch)=> {

    dispatch({type: "meeting_loading"});

    
    //headers
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    //Request body
    const body = JSON.stringify({title,status,date});

    console.log(JSON.stringify(body))
    axios
    .put(url+'/'+id,body, config)
    .then(res =>{
        dispatch(getMeetings())
    }).catch(err=>alert('error'))

}

