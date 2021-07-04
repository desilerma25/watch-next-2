// runs at build time
// can add fetch req to fetch data
// runs b4 component is rendered
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/popular-movies');
    const data = await res.json();

    return {
        // makes data avail in props
        props: {text: data}
    }

}
