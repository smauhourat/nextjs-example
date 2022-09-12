import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Male_northern_cardinal_in_Central_Park_%2852612%29.jpg',
        address: 'Some address 5, 123 Some City',
        description: 'This is a first Meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Alcedo_atthis_-_Riserve_naturali_e_aree_contigue_della_fascia_fluviale_del_Po.jpg',
        address: 'Some address 5, 123 Some City',
        description: 'This is a first Meetup'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Snowy-bellied_hummingbird_%28Amazilia_edward_niveoventer%29_1.jpg',
        address: 'Some address 5, 123 Some City',
        description: 'This is a first Meetup'
    },
];

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React Meetup" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from API
    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.68hk6nu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage;