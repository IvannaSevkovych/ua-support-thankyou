import Head from "next/head";
import { ThreeIcon } from "../../../components/ThreeIcon";

const participant = ({ participant }) => {
    return (
        <>
            <Head>
                <title>
                    Danke an {participant.id}
                </title>
            </Head>
            <div>
                Participant {participant.id}
            </div>

            <ThreeIcon {...participant}></ThreeIcon>
        </>
    )
}

export async function getStaticProps({ params }) {
    const req = await fetch(`http://localhost:3000/participants/${params.id}.json`);
    const data = await req.json();

    return {
        props: { participant: data }
    }
}

export async function getStaticPaths() {
    const req = await fetch(`http://localhost:3000/participants/ids.json`);
    const data = await req.json();

    const paths = data.map( participantId => {
        return { params: { id : participantId } }
    })

    return {
        paths,
        fallback: false
    }
}


export default participant;