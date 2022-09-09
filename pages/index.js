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

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;