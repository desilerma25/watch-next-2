// runs at build time
// can add fetch req to fetch data
// runs b4 component is rendered
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/popular-movies');
    const data = await res.json();

    return {
        // makes data avail in props
        props: { text: data }
    }
}

const Test = ({ text }) => {
    return (
        <div>
            <h1> Is this displaying? </h1>
            {/* {text.map(t => (
                <div key={t.id}>
                    <h3>{t}</h3>
                </div>
            ))} */}
        </div>
    );
}

export default Test;
