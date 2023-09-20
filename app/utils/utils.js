import Card from "../components/card/Card";


const datas = [
    {
        title: 'Unique Design',
        image: '/images/portfolio1.jpg',
        description: 'Designs will made by professional Designer. Will be designed from scratch.',
        id: 1
    },
    {
        title: 'Web Development',
        image: '/images/portfolio2.jpg',
        description: 'Development will be fast and source is sent to client.',
        id: 2
    },
    {
        title: 'SEO Configuration',
        image: '/images/portfolio3.jpg',
        description: 'SEO Configuration will be planned and implemented to rank up.',
        id: 3
    },
    {
        title: 'Portfolio Websites',
        image: '/images/portfolio4.jpg',
        description: 'Dtanding out Portfolio Website for your website visitors and Employers.',
        id: 4
    }
]



export default function  CardDisplayer () {
    return (datas ? (
        <div className="mt-8 px-3 md:grid grid-cols-2">
            {datas.map((obj)=> <Card data={obj} key={obj.id} />)}
        </div>
    ) : (
        <p>No Data to display!!</p>
    )
    );
}