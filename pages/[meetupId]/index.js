//import {Fragment} from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <MeetupDetail 
            image='https://upload.wikimedia.org/wikipedia/commons/5/5c/Male_northern_cardinal_in_Central_Park_%2852612%29.jpg'
            title='A First Meetup'
            address='Some Street 5, 123132 Some City'
            description='The meet description'/>
    );
}

export default MeetupDetails;