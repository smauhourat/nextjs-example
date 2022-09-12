import { Fragment } from 'react';
import Head from 'next/head';

import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                {/* <title>{props.meetupData.title}</title> */}
                <title>Detalle</title>
                {/* <meta name="description" content={props.meetupData.description} /> */}
                <meta name="description" content="Esta es la description" />
            </Head>
            <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    // fetch data from API
    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.68hk6nu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
        
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() }
        }))
        // [
        //     {
        //         params: {
        //             meetupId: 'm1',
        //         },
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2',
        //         },
        //     },
        // ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single Meetup

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.68hk6nu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    console.log(selectedMeetup);

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
            // {
            //     id: meetupId,
            //     image: selectedMeetup.image,
            //     title: 'A First Meetup',
            //     address: 'Some Street 5, 123132 Some City',
            //     description: 'The meet description'                
            // }
        }
    }
}

export default MeetupDetails;