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

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single Meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupDate: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Male_northern_cardinal_in_Central_Park_%2852612%29.jpg',
                title: 'A First Meetup',
                address: 'Some Street 5, 123132 Some City',
                description: 'The meet description'                
            }
        }
    }
}

export default MeetupDetails;